import Category from "../models/category.model.mjs";

class CategoryService {
    async getCategoryById(id) {
        return await Category.findById(id);
    }

    async findAll(page = 1, limit = 10) {
        const totalCategories = await Category.countDocuments();
        const categories = await Category.find()
            .sort({ createdAt: -1 })
            .skip(limit * (page - 1))
            .limit(10);

        return {
            categories,
            page,
            totalPages: Math.ceil(totalCategories / limit),
            total: totalCategories,
        };
    }

    async create(data) {
        const Category = new Category(data);
        return await Category.save();
    }

    async update(id, data) {
        return await Category.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async delete(id) {
        return await Category.findByIdAndDelete(id);
    }
}

export default new CategoryService();