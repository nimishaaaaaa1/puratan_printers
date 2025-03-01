import { Request, Response } from 'express';
import { FileService } from '../../services/file/FileService';
import { ValidationError } from '../../utils/errors/ValidationError';

// Extend Express Request to include user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
      file?: any;
    }
  }
}

export class FileController {
  private fileService: FileService;

  constructor() {
    this.fileService = new FileService();
  }

  async uploadFile(req: Request, res: Response): Promise<void> {
    try {
      if (!req.file) {
        throw new ValidationError('No file uploaded');
      }

      const userId = req.user?.id;
      
      if (!userId) {
        throw new ValidationError('User not authenticated');
      }

      const file = await this.fileService.uploadFile(req.file, userId);
      
      res.status(201).json({
        success: true,
        data: { file }
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('File upload error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred during file upload'
        });
      }
    }
  }

  async getUserFiles(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.user?.id;
      
      if (!userId) {
        throw new ValidationError('User not authenticated');
      }
      
      const files = await this.fileService.getUserFiles(userId);
      
      res.status(200).json({
        success: true,
        data: { files }
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('Get user files error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }

  async getFileById(req: Request, res: Response): Promise<void> {
    try {
      const fileId = req.params.id;
      const userId = req.user?.id;
      
      if (!userId) {
        throw new ValidationError('User not authenticated');
      }
      
      const file = await this.fileService.getFileById(fileId, userId);
      
      res.status(200).json({
        success: true,
        data: { file }
      });
    } catch (error: any) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('Get file by ID error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }
} 