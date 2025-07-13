import { Router } from "express";

import { CreateUser } from "../controller/userController.js";
const router= Router();

router.post("/user",CreateUser)






export default router;