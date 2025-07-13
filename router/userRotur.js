import { Router } from "express";

import { CreateUser, deleteuser, getAllUsers, updateuaser } from "../controller/userController.js";
const router= Router();

router.post("/user",CreateUser)
router.post("/updateuaser/:id",updateuaser)
router.delete("/deleteuser/:id",deleteuser)
router.get("/getAllUsers/:email",getAllUsers)






export default router;