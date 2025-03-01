import { Router } from 'express';
import multer from 'multer';
import { FileController } from '../controllers/FileController';
import { authenticate } from '../../middleware/authMiddleware';

const router = Router();
const fileController = new FileController();

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 500 * 1024 * 1024 // 500MB
  }
});

// File routes
router.post('/upload', authenticate, upload.single('file'), (req, res) => 
  fileController.uploadFile(req, res)
);

router.get('/', authenticate, (req, res) => 
  fileController.getUserFiles(req, res)
);

router.get('/:id', authenticate, (req, res) => 
  fileController.getFileById(req, res)
);

export default router; 