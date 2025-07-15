import CategoryService from "../services/category.service.mjs";

class CategoryController {
    async findAll(req, res, next) {
        try {
            const categories = await CategoryService.findAll(req.query.page, req.query.limit);
            res.json(categories);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const newCategory = await CategoryService.create(req.body);
            return res.status(201).json(newCategory);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const updatedCategory = await CategoryService.update(req.params.id, req.body);
            return res.status(201).json(updatedCategory);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deletedCategory = await CategoryService.delete(req.params.id);
            return res.status(200).json(deletedCategory);
        } catch (err) {
            next(err);
        }
    }
}

export default new CategoryController();