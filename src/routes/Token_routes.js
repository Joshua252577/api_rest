import { Router } from 'express';
import tokenController from '../controllers/token_controller';

const router = new Router();

router.post('/', tokenController.store);

export default router;
