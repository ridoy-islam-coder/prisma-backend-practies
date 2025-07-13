import { Prisma } from "@prisma/client";

import prisma from "../DB/db.confige.js"; 
export const CreateUser=async(req, res) => {
    const { name, email, password } = req.body; 

    const finduser=await prisma.user.findUnique({
        where: {
            email: email
        }
    });
    
    if(finduser){
        return res.status(400).json({ message: "User already exists" });
    }
    const createUser= await prisma.user.create({
        data: {
            name: name,     
            email: email,
            password: password
        }
    });
    return res.status(201).json({ message: "User created successfully", user: createUser });
  }