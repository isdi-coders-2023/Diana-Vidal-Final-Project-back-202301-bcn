import { type NextFunction, type Request, type Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "../../../loadEnvironment.js";
import User from "../../../database/models/Users/User.js";
import { loginUserErrors } from "../../../utils/error.js";
import statusCodes from "../../../utils/statusCodes.js";
import { type UserCredentials } from "./types.js";
import { type CustomJwtPayload } from "../../../types.js";

const {
  success: { okCode },
} = statusCodes;

const loginUser = async (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    UserCredentials
  >,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username }).exec();
    if (!user) {
      throw loginUserErrors.userNotFound;
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw loginUserErrors.wrongPassword;
    }

    const jwtPayload: CustomJwtPayload = {
      id: user._id.toString(),
      username,
    };

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET!, {
      expiresIn: "3d",
    });

    res.status(okCode).json({ token });
  } catch (error: unknown) {
    next(error);
  }
};

export default loginUser;
