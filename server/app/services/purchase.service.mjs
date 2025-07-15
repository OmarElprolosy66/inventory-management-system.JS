import Purchase from '../models/purchase.mode.mjs';

class PurchaseService {
    async getPurchaseById(id) {
        return await Purchase.findById(id).populate('supplier').populate('items.product').populate('created_by');
    }

    async findAll(page = 1, limit = 10) {
        const totalPurchases = await Purchase.countDocuments();
        const purchases = await Purchase.find()
            .sort({ createdAt: -1 })
            .skip(limit * (page - 1))
            .limit(limit)
            .populate('supplier')
            .populate('items.product')
            .populate('created_by');

        return {
            purchases,
            page,
            totalPages: Math.ceil(totalPurchases / limit),
            total: totalPurchases,
        };
    }

    async create(data) {
        const purchase = new Purchase(data);
        return await purchase.save();
    }

    async update(id, data) {
        return await Purchase.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Purchase.findByIdAndDelete(id);
    }
}

export default new PurchaseService();