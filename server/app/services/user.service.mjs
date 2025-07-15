import User from '../models/user.model.mjs';

class UserService {
    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async findAll(page = 1, limit = 10) {
        const totalUsers = await User.countDocuments();
        const users = await User.find()
            .sort({ createdAt: -1 })
            .skip(limit * (page - 1))
            .limit(10);

        return {
            users,
            page,
            totalPages: Math.ceil(totalUsers / limit),
            total: totalUsers,
        };
    }

    async create(data) {
        const user = new User(data);
        return await user.save();
    }

    async update(id, data) {
        return await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();
    