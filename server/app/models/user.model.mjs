import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({ 
    name: { type: String, required: true, maxLength: 255, },
    email: { type: String, required: true, unique: true, },
    password: { type: String, required: true, },
    role: {
        type: String,
        enum: ['admin', 'manager', 'employee'], 
        default: "employee"
    },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt    = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next(); 
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', userSchema);

export default User;
