import Likes from "../../models/likes.js"

const addlikes= async(req,res)=>{
  const {likes,jobId}=req.body
  const  addnewLikes= new Likes({likes,jobId})
  console.log("Heloooo Capiyo")
 // console.log(req.body)


  try {   
        await addnewLikes.save();
        //console.log(job)
        res.status(201).json(addnewLikes);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
}
export {addlikes}