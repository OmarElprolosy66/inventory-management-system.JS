import { Router } from "express";
import userRoutesV1 from "./v1/user.routes.mjs";
import productRoutesV1 from "./v1/product.routes.mjs";
import categoryRoutesV1 from "./v1/category.routes.mjs";
import supplierRoutesV1 from "./v1/supplier.routes.mjs";
import purchaseRoutesV1 from "./v1/purchase.routes.mjs";
import userController from "../app/controllers/UserController.mjs";
import { authenticate } from "../middlewares/jwt.middleware.mjs";

const router = Router();

/// Ungarded routes ////
router.post('/v1/login', userController.login);

////  All garded routes ////
router.use(authenticate);

/////// V1 routes. ///////
router.use('/v1/users', userRoutesV1);
router.use('/v1/products', productRoutesV1);
router.use('/v1/categories', categoryRoutesV1);
router.use('/v1/suppliers', supplierRoutesV1);
router.use('/v1/purchases', purchaseRoutesV1);

export default router;
