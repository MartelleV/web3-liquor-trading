import express from 'express';
import LiquorController from '../controllers/liquorController.js';

const router = express.Router();

router.get('/', LiquorController.getAllLiquors);
router.get('/:id', LiquorController.getLiquorById);
router.get('/search', LiquorController.searchLiquors);
router.get('/filter', LiquorController.filterLiquors);

export default router;