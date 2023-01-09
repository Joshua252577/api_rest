import { Router } from 'express';
import alunoController from '../controllers/Aluno_controller';
import loginRequired from "../midllewares/login_required";
const router = new Router();

router.get('/', alunoController.index);
router.post('/', loginRequired, alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);

export default router;
