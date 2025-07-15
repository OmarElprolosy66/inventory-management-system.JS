import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 255, },
    SKU: { type: Number, required: true, unique: true, },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    cost: { type: Number, required: true },
    quantity: { type: Number, required: true, maxLength: 5000 },
    description: { type: String, maxLength: 1000 },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;