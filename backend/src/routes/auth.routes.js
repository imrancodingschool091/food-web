import { Register, Login, getAllUsers, deleteUser } from "../controllers/auth.controller.js";
import express from "express";
import { loginValidate, signupValidate } from "../middlewares/validate.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", signupValidate,  Register);
authRouter.post("/login",loginValidate, Login);
authRouter.get("/",getAllUsers);
authRouter.delete("/:id",deleteUser);

export default authRouter;
