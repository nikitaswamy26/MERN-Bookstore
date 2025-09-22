import express from "express";
import { signup, login } from "../controller/user.controller.js";
import { removeBook } from "../controller/book.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/removeBook", removeBook);

export default router;