import { Router } from "express";

import { CreateUser, deleteuser, updateuaser } from "../controller/userController.js";
const router= Router();

router.post("/user",CreateUser)
router.post("/updateuaser/:id",updateuaser)
router.delete("/deleteuser/:id",deleteuser)






export default router;