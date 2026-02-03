import express from "express";
import {create,list} from "../controllers/user.controller.js";
import {validate} from "../middlewares/validate.middleware.js";
import {z} from "zod";

const router = express.Router();

const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email
});

router.post("/", validate(createUserSchema), create);
router.get("/",list);

export default router;