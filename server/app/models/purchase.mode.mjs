import mongoose from 'mongoose';
import { nanoid } from 'nanoid';

const purchaseItemSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, minLength: 1 },
    cost: { type: Number, required: true },
    total: { type: Number, required: true },
});

const purchaseSchema = new mongoose.Schema({
    invoice_number: { type: String , required: true, unique: true, },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true,
    },
    total_amount: { type: Number, required: true },
    status: {
        type: String,
        enum: ["pending", "received", "cancelled"],
        default: 'pending',
        required: true,
    },
    items: [purchaseItemSchema],
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

purchaseSchema.pre('validate', async function (next) {
    let unique, exists = true;
    while (exists) {
        unique = nanoid(10);
        exists = await mongoose.models.Purchase.exists({ invoice_number: unique });
    }
    this.invoice_number = unique;
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;