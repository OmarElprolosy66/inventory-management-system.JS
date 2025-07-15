import { Router } from "express";
import { authorize } from '../../middlewares/authorize.middleware.mjs';
import ProductController from "../../app/controllers/ProductController.mjs";
import { productValidator } from "../../validators/product.validator.mjs";
import { validate } from "../../middlewares/validate.middleware.mjs";

const router = Router();

router.get('/', ProductController.findAll);
router.post('/', productValidator, validate, ProductController.create);
router.patch('/:id', productValidator, validate, ProductController.update);
router.delete('/:id', authorize(['admin', 'manager']), ProductController.delete);

export default router;