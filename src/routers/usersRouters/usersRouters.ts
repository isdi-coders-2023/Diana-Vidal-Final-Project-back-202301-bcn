import { Router } from "express";
import "../../loadEnvironment.js";
import loginUser from "../../controllers/userControllers/userControllers.js";

export const usersRouters = Router();

usersRouters.post("/login", loginUser);
