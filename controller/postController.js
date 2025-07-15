
import prisma from "../DB/db.confige.js";


export const createpost = async (req, res) => {
  const { user_id, title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required" });
  }

  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        user_id: user_id,
      },
    });

    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


export const updatePost = async (req, res) => { 
   const { id } = req.params;
   const { user_id, title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required" });
    }

    try {
        const post = await prisma.post.update({
            where: { id: id },
             data: {
        title,
        content,
        user_id: user_id,
      },
        });

        return res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Something went wrong" });
    }



}









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

 