import { Router, Request, Response } from 'express';
import multer from 'multer';
import { FileController } from '../controllers/FileController';
import { authMiddleware } from '../../middleware/authMiddleware';

const router = Router();
const fileController = new FileController();

// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ 
  storage,
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB limit
  }
});

// Protected routes - require authentication
router.use(authMiddleware);

// Upload a new file
router.post(
  '/upload',
  upload.single('file'),
  (req: Request, res: Response) => fileController.uploadFile(req, res)
);

// Get all files for the authenticated user
router.get(
  '/',
  (req: Request, res: Response) => fileController.getUserFiles(req, res)
);

// Get a specific file by ID
router.get(
  '/:id',
  (req: Request, res: Response) => fileController.getFileById(req, res)
);

export default router; 