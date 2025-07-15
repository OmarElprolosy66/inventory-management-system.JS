import { Router } from "express";
import { authorize } from '../../middlewares/authorize.middleware.mjs';
import CategoryController from "../../app/controllers/CategoryController.mjs";
import { categoryValidator } from '../../validators/category.validator.mjs';
import { validate } from "../../middlewares/validate.middleware.mjs";

const router = Router();

router.get('/', CategoryController.findAll);
router.post('/', categoryValidator, validate, CategoryController.create);
router.patch('/:id', authorize(['admin']), categoryValidator, validate, CategoryController.update);
router.delete('/:id', authorize(['admin']), CategoryController.delete);

export default router;