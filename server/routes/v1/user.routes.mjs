import { Router } from 'express';
import { authorize } from '../../middlewares/authorize.middleware.mjs';
import UserController from '../../app/controllers/UserController.mjs';
import { createUserValidator, updateUserValidator } from '../../validators/user.validator.mjs';
import { validate } from '../../middlewares/validate.middleware.mjs';

const router = Router();

router.get('/', authorize(['admin', 'manager']), UserController.getAll);
router.post('/', authorize(['admin']), createUserValidator, validate, UserController.create);
router.patch('/:id', authorize(['admin']), updateUserValidator, validate, UserController.update);
router.delete('/:id', authorize(['admin']), UserController.delete);

export default router;
