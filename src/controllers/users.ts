import {Request, Response} from 'express';
import bcrypt from "bcryptjs";
import User from '../models/users';

export const register = async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser = await User.findOne({ email });
        if (oldUser) return res.status(400).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({ firstName, lastName, email, password: hashedPassword });
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.error(error);
    }
};

