import express from 'express';
import UserController from '../controllers/userController.js';
import authenticateToken from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.get('/profile', authenticateToken, UserController.getProfile);
router.get('/transactions', authenticateToken, UserController.getTransactions);
router.post('/transactions', authenticateToken, UserController.createTransaction);
export default router;