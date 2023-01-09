import { Router } from 'express';
import userController from '../controllers/User_controller';
import loginRequired from "../midllewares/login_required";

const router = new Router();

//Não deveria existir
//router.get('/', loginRequired, userController.index); // lista usuários
//router.get('/:id', userController.show); // lista usuário

router.post('/', userController.store); // Cria um usuário
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
