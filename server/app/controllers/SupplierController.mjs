import SupplierService from '../services/supplier.service.mjs';

class SupplierController {
    async findAll(req, res, next) {
        try {
            const suppliers = await SupplierService.findAll(req.query.page, req.query.limit);
            res.json(suppliers);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const newSupplier = await SupplierService.create(req.body);
            return res.status(201).json(newSupplier);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const updatedSupplier = await SupplierService.update(req.params.id, req.body);
            return res.status(201).json(updatedSupplier);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deletedSupplier = await SupplierService.delete(req.params.id);
            return res.status(200).json(deletedSupplier);
        } catch (err) {
            next(err);
        }
    }
}

export default new SupplierController();