import PurchaseService from '../services/purchase.service.mjs';
import { purchaseDoneEvent } from '../events/purchaseDone.event.mjs';

class PurchaseController {
    async findAll(req, res, next) {
        try {
            const purchases = await PurchaseService.findAll(req.query.page, req.query.limit);
            res.json(purchases);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const newPurchase = await PurchaseService.create(req.body);
            for (const item of req.body.items) {
                purchaseDoneEvent.emit("created", item.id, item);
            }

            return res.status(201).json(newPurchase);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const updatedPurchase = await PurchaseService.update(req.params.id, req.body);
            return res.status(201).json(updatedPurchase);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deletedPurchase = await PurchaseService.delete(req.params.id);
            return res.status(200).json(deletedPurchase);
        } catch (err) {
            next(err);
        }
    }
}

export default new PurchaseController();