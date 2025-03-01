import { Request, Response } from 'express';
import { FileService } from '../../services/file/FileService';
import { ValidationError } from '../../utils/errors/ValidationError';

export class FileController {
  private fileService: FileService;

  constructor() {
    this.fileService = new FileService();
  }

  async uploadFile(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
        return;
      }

      if (!req.file) {
        res.status(400).json({
          success: false,
          error: 'No file uploaded'
        });
        return;
      }

      const file = await this.fileService.uploadFile(req.file, req.user.userId);

      res.status(201).json({
        success: true,
        data: file
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('File upload error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }

  async getUserFiles(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
        return;
      }

      const files = await this.fileService.getUserFiles(req.user.userId);

      res.status(200).json({
        success: true,
        data: files
      });
    } catch (error) {
      console.error('Get user files error:', error);
      res.status(500).json({
        success: false,
        error: 'An unexpected error occurred'
      });
    }
  }

  async getFileById(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
        res.status(401).json({
          success: false,
          error: 'Authentication required'
        });
        return;
      }

      const fileId = req.params.id;
      const file = await this.fileService.getFileById(fileId, req.user.userId);

      res.status(200).json({
        success: true,
        data: file
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        res.status(400).json({
          success: false,
          error: error.message
        });
      } else {
        console.error('Get file error:', error);
        res.status(500).json({
          success: false,
          error: 'An unexpected error occurred'
        });
      }
    }
  }
} 