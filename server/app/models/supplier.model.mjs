 import mongoose from 'mongoose';

const supplierSchema = new mongoose.Schema({
    name: { type: String, required: true, maxLength: 255, },
    phone: { type: String, },
    email: { type: String, required: true },
    address: { type: String, },
    notes: { type: String, },
}, { timestamps: true });

const Supplier = mongoose.model('Supplier', supplierSchema);

export default Supplier;
