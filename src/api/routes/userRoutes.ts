import { Router } from 'express';
import { authenticate, authorize } from '../../middleware/authMiddleware';

const router = Router();

router.get('/profile', authenticate, (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: req.user
    }
  });
});

router.get('/admin', authenticate, authorize(['admin']), (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Admin access granted'
  });
});

export default router; 