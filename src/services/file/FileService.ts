import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import { FileRepository } from './FileRepository';
import { ValidationError } from '../../utils/errors/ValidationError';

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

interface UploadedFile {
  originalname: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

interface FileData {
  id: string;
  originalName: string;
  mimeType: string;
  size: number;
  path: string;
  userId: string;
  status: string;
  previewUrl?: string;
  metadata?: {
    width?: number;
    height?: number;
    colorSpace?: string;
    resolution?: number;
    pageCount?: number;
  };
  createdAt: Date;
}

export class FileService {
  private fileRepository: FileRepository;
  private uploadDir: string;
  private maxFileSize: number;
  private allowedMimeTypes: string[];

  constructor(fileRepository?: FileRepository) {
    this.fileRepository = fileRepository || new FileRepository();
    this.uploadDir = process.env.UPLOAD_DIR || path.join(process.cwd(), 'uploads');
    this.maxFileSize = 500 * 1024 * 1024; // 500MB
    this.allowedMimeTypes = [
      'application/pdf',
      'application/postscript',
      'application/illustrator',
      'application/vnd.adobe.photoshop',
      'application/x-indesign'
    ];
  }

  async uploadFile(file: UploadedFile, userId: string): Promise<FileData> {
    // Validate file type
    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      throw new ValidationError(
        'Unsupported file type. Please upload PDF, AI, PSD, INDD, or EPS files.'
      );
    }

    // Validate file size
    if (file.size > this.maxFileSize) {
      throw new ValidationError(
        `File size exceeds the limit of ${this.maxFileSize / (1024 * 1024)}MB.`
      );
    }

    // Create user upload directory if it doesn't exist
    const userUploadDir = path.join(this.uploadDir, userId);
    await mkdir(userUploadDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${file.originalname}`;
    const filePath = path.join(userUploadDir, filename);

    // Save file to disk
    await writeFile(filePath, file.buffer);

    // Save file metadata to database
    const savedFile = await this.fileRepository.save({
      originalName: file.originalname,
      mimeType: file.mimetype,
      size: file.size,
      path: filePath,
      userId,
      status: 'uploaded'
    });

    // Queue file for processing (preview generation, validation, etc.)
    this.queueFileProcessing(savedFile.id);

    return {
      id: savedFile.id,
      originalName: savedFile.originalName,
      mimeType: savedFile.mimeType,
      size: savedFile.size,
      path: savedFile.path,
      userId: savedFile.userId,
      status: savedFile.status,
      createdAt: savedFile.createdAt
    };
  }

  private queueFileProcessing(fileId: string): void {
    // In a real implementation, this would add the file to a queue
    // for asynchronous processing (e.g., using a job queue like Bull)
    // For now, we'll just log it
    console.log(`File ${fileId} queued for processing`);
    
    // In a real implementation, this would trigger:
    // 1. Preview generation
    // 2. File validation (resolution, color space, etc.)
    // 3. Metadata extraction
  }

  async getUserFiles(userId: string): Promise<FileData[]> {
    const files = await this.fileRepository.findByUserId(userId);
    
    return files.map(file => ({
      id: file.id,
      originalName: file.originalName,
      mimeType: file.mimeType,
      size: file.size,
      path: file.path,
      userId: file.userId,
      status: file.status,
      previewUrl: file.previewUrl,
      metadata: file.metadata,
      createdAt: file.createdAt
    }));
  }

  async getFileById(fileId: string, userId: string): Promise<FileData> {
    const file = await this.fileRepository.findById(fileId);
    
    if (!file) {
      throw new ValidationError('File not found');
    }
    
    // Ensure user can only access their own files
    if (file.userId.toString() !== userId) {
      throw new ValidationError('Access denied');
    }
    
    return {
      id: file.id,
      originalName: file.originalName,
      mimeType: file.mimeType,
      size: file.size,
      path: file.path,
      userId: file.userId,
      status: file.status,
      previewUrl: file.previewUrl,
      metadata: file.metadata,
      createdAt: file.createdAt
    };
  }
} 