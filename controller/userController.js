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



  export const updateuaser=async(req,res)=>{
    const { id } = req.params;
    const { name, email, password } = req.body;

    await prisma.user.update({
        where: { id: id},
        data: {
            name: name, 
            email: email,
            password: password
        }
    })
   return res.status(200).json({ message: "User updated successfully" });
 
  }


  export const deleteuser=async(req,res)=>{
    const {id}=req.params;
    await prisma.user.delete({
        where:{ id:id}
    })
    return res.status(200).json({ message: "User deleted successfully" });
  }


  export const getAllUsers = async (req, res) => {
         const { email } = req.params;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }    
    const facht=await prisma.user.findUnique({
        where: { email:email }
    });
    return res.status(200).json({ message: "Users fetched successfully", users: facht });
  }
