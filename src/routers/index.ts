import { Router } from 'express';

import healthRouter from './healthRouter.js';
import contactRouter from './contactRouter.js';

const router = Router();

router.use('/health', healthRouter);
router.use('/contacts', contactRouter);

export default router;
