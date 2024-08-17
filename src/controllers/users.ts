import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/users";
import jwt, { Secret } from "jsonwebtoken";
import { configVariables } from "../config";
import {
  ReasonPhrases,
  StatusCodes,
  getReasonPhrase,
  getStatusCode,
} from "http-status-codes";

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (oldUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({ firstName, lastName, email, password: hashedPassword });
    res.status(StatusCodes.CREATED).json({ message: ReasonPhrases.CREATED });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.error(error);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);
      if (isPasswordCorrect) {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          configVariables.SECRET_KEY as Secret,
          { expiresIn: "10h" }
        );
        return res.status(StatusCodes.OK).json({ token });
      }
    }
    return res.status(StatusCodes.OK).json({ message: "Invalid Credentials" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    console.error(error);
  }
};

export const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select("-password");
    res.status(StatusCodes.OK).json({ userDetails: user });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    console.error(error);
  }
};

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      select: "-password",
    });
    if (!updatedUser) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found" });
    }
    res.status(StatusCodes.OK).json(updatedUser);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    console.error(error);
  }
};
