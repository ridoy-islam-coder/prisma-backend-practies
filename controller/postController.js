import prisma from "../DB/db.confige";
import { Prisma } from "@prisma/client";
export const createpost = async (req, res) => {
    const { title, content } = req.body;
    const { user_id } = req.params; 
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" }); 
    }   
    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            user: {
                connect: { id: user_id }
            }
        }
    });
    return res.status(201).json({ message: "Post created successfully", post });
};

export const getAllposts = async (req, res) => {
    const user= req.params.user_id;
    if (!user) {
        return res.status(400).json({ message: "User ID is required" });
    }
    const posts =await prisma.post.findMany({
        where: { user_id: user },
        include: {  
            user: true,
            comment: true
        },
        orderBy: { createdAt: "desc" }
    });
    return res.status(200).json({ message: "Posts retrieved successfully", posts });
}
