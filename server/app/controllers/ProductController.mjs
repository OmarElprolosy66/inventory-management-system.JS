import ProductService from '../services/product.service.mjs';

class ProductController {
    async findAll(req, res, next) {
        try {
            const products = await ProductService.findAll(req.query.page, req.query.limit);
            res.json(products);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const newProduct = await ProductService.create(req.body);
            return res.status(201).json(newProduct);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const updatedProduct = await ProductService.update(req.params.id, req.body);
            return res.status(201).json(updatedProduct);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deletedProduct = await ProductService.delete(req.params.id);
            return res.status(200).json(deletedProduct);
        } catch (err) {
            next(err);
        }
    }
}

export default new ProductController();