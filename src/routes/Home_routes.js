import { Router } from 'express';
import homeController from '../controllers/Home_controller';

const router = new Router();

router.get('/', homeController.index);

export default router;
