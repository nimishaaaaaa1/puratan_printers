import { FileService } from '../../../../src/services/file/FileService';
import { ValidationError } from '../../../../src/utils/errors/ValidationError';
import { FileRepository } from '../../../../src/services/file/FileRepository';
import fs from 'fs';
import path from 'path';

// Mock dependencies
jest.mock('../../../../src/services/file/FileRepository');
jest.mock('fs');
jest.mock('path');

describe('FileService - Upload', () => {
  let fileService: FileService;
  let mockFileRepository: jest.Mocked<FileRepository>;

  beforeEach(() => {
    jest.clearAllMocks();
    mockFileRepository = new FileRepository() as jest.Mocked<FileRepository>;
    fileService = new FileService(mockFileRepository);
  });

  it('should upload a valid file', async () => {
    // Arrange
    const mockFile = {
      originalname: 'test-design.pdf',
      mimetype: 'application/pdf',
      size: 1024 * 1024, // 1MB
      buffer: Buffer.from('test file content')
    };
    
    const userId = 'user-123';
    
    const mockFileData = {
      id: 'file-123',
      originalName: mockFile.originalname,
      mimeType: mockFile.mimetype,
      size: mockFile.size,
      path: 'uploads/user-123/test-design.pdf',
      userId,
      status: 'uploaded',
      createdAt: new Date()
    };
    
    // Mock repository to return file data
    mockFileRepository.save.mockResolvedValue(mockFileData);
    
    // Act
    const result = await fileService.uploadFile(mockFile, userId);
    
    // Assert
    expect(result).toBeDefined();
    expect(result.id).toBe(mockFileData.id);
    expect(result.originalName).toBe(mockFile.originalname);
    expect(result.status).toBe('uploaded');
    expect(mockFileRepository.save).toHaveBeenCalled();
  });

  it('should throw ValidationError for unsupported file type', async () => {
    // Arrange
    const mockFile = {
      originalname: 'test-image.gif',
      mimetype: 'image/gif',
      size: 1024 * 1024,
      buffer: Buffer.from('test file content')
    };
    
    const userId = 'user-123';
    
    // Act & Assert
    await expect(fileService.uploadFile(mockFile, userId))
      .rejects
      .toThrow(ValidationError);
    
    expect(mockFileRepository.save).not.toHaveBeenCalled();
  });

  it('should throw ValidationError for file exceeding size limit', async () => {
    // Arrange
    const mockFile = {
      originalname: 'large-design.pdf',
      mimetype: 'application/pdf',
      size: 600 * 1024 * 1024, // 600MB (exceeds 500MB limit)
      buffer: Buffer.from('test file content')
    };
    
    const userId = 'user-123';
    
    // Act & Assert
    await expect(fileService.uploadFile(mockFile, userId))
      .rejects
      .toThrow(ValidationError);
    
    expect(mockFileRepository.save).not.toHaveBeenCalled();
  });
}); 