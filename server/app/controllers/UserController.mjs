import jwt from "jsonwebtoken";
import UserService from "../services/user.service.mjs";
import bcrypt from "bcrypt";

class UserController {
    async login(req, res, next) {
        const { email, password } = req.body;
        try {
            const user = await UserService.getUserByEmail(email);
            if (!user) return res.status(401).json({message: "Invalid credentials"});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({message: "Invalid credentials"});
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.SECRET,
                { expiresIn: '1d'}
            );

            return res.json({ token });
        } catch (err) {
            next(err);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await UserService.findAll(req.query.page, req.query.limit);
            return res.json(users);
        } catch (err) {
            next(err);
        }
    }

    async create(req, res, next) {
        try {
            const newUser = await UserService.create(req.body);
            return res.status(201).json(newUser);
        } catch (err) {
            next(err);
        }
    }

    async update(req, res, next) {
        try {
            const updatedUser = await UserService.update(req.params.id, req.body);
            return res.status(201).json(updatedUser);
        } catch (err) {
            next(err);
        }
    }

    async delete(req, res, next) {
        try {
            const deletedUser = await UserService.delete(req.params.id);
            return res.status(200).json(deletedUser);
        } catch (err) {
            next(err);
        }
    }
}

export default new UserController();
