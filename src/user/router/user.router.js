import { Router } from "express";
import { userMiddleware } from "../middleware/user.middleware.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controller/user.controller.js";

export const userRouter = Router();

userRouter.post("/users", userMiddleware, createUser);
userRouter.get("/users", getAllUsers);
userRouter.put("/users/:username", updateUser);
userRouter.delete("/users/:username", deleteUser);
