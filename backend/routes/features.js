import express from 'express';
import { getFeatures, getOneStory, createStory, updateStory, deleteStory, getLikes } from '../controller/featureController.js';

const router = express.Router();

router.get('/', getFeatures);
router.get('/:id', getOneStory);
router.get('/:id/likes', getLikes);
router.post('/', createStory);
router.put('/:id', updateStory);
router.delete('/:id', deleteStory);

export default router;
