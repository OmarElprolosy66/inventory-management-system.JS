import { Router } from "express";
import { authorize } from '../../middlewares/authorize.middleware.mjs';
import SupplierController from "../../app/controllers/SupplierController.mjs";
import { supplierValidator } from "../../validators/supplier.validator.mjs";
import { validate } from "../../middlewares/validate.middleware.mjs";

const router = Router();

router.get('/', SupplierController.findAll);
router.post('/', supplierValidator, validate, SupplierController.create);
router.patch('/:id', authorize(['admin', 'manager']), supplierValidator, validate, SupplierController.update);
router.delete('/:id', authorize(['admin', 'manager']), SupplierController.delete);

export default router;