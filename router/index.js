import { Router } from "express";

import userRouter from "./userRouter.js"; // Adjust the import path as necessary
const router= Router();

router.post("/api/user",userRouter)






export default router;