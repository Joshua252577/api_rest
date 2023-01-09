import { Router } from 'express';
import photoController from '../controllers/Photo_controller';
import loginRequired from "../midllewares/login_required";

const router = new Router();

router.post('/', loginRequired, photoController.store);

export default router;
