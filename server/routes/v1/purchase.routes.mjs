import { Router } from "express";
import { authorize } from '../../middlewares/authorize.middleware.mjs';
import PurchaseController from "../../app/controllers/PurchaseController.mjs";
import { purchaseValidator } from "../../validators/purchase.validator.mjs";
import { validate } from "../../middlewares/validate.middleware.mjs";

const router = Router();

router.get('/', PurchaseController.findAll);
router.post('/', purchaseValidator, validate, PurchaseController.create);
router.patch('/:id', authorize(['admin', 'manager']), purchaseValidator, validate, PurchaseController.update);
router.delete('/:id', authorize(['admin']), PurchaseController.delete);

export default router;