import { Router } from "express";

import { CreateUser, deleteuser, getAllUsers, updateuaser } from "../controller/userController.js";
import { createpost, getAllposts } from "../controller/postController.js";
const router= Router();

router.post("/user",CreateUser)
router.post("/updateuaser/:id",updateuaser)
router.delete("/deleteuser/:id",deleteuser)
router.get("/getAllUsers/:email",getAllUsers)

//postapiurl

router.post("/createpost",createpost)


router.get("/getAllposts/:user_id", getAllposts);




export default router;