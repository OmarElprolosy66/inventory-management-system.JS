import Supplier from '../models/supplier.model.mjs';

class SupplierService {
    async getSupplierById(id) {
        return await Supplier.findById(id);
    }

    async findAll(page = 1, limit = 10) {
        const totalSuppliers = await Supplier.countDocuments();
        const suppliers = await Supplier.find()
            .sort({ createdAt: -1 })
            .skip(limit * (page - 1))
            .limit(limit);

        return {
            suppliers,
            page,
            totalPages: Math.ceil(totalSuppliers / limit),
            total: totalSuppliers,
        };
    }

    async create(data) {
        const supplier = new Supplier(data);
        return await supplier.save();
    }

    async update(id, data) {
        return await Supplier.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async delete(id) {
        return await Supplier.findByIdAndDelete(id);
    }
}

export default new SupplierService();