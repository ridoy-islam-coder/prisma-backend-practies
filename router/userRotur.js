import { Router } from "express";

import { CreateUser, updateuaser } from "../controller/userController.js";
const router= Router();

router.post("/user",CreateUser)
router.post("/updateuaser/:id",updateuaser)






export default router;