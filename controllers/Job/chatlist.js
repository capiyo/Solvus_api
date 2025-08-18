import Chats from '../../models/chats.js'
import Job from '../../models/Job.js';
import Users from '../../models/User.js';

const chatlist = async (req, res) => {
 const  myId=req.params.myId
    try {
        //const chats = await Chats.findById(myId);
      //  if(chats.senderId===myId){waa
      const  user= await Users.findById(myId)
         console.log("data here")

        // getMyJobs(chats.jobID)
     //   }
       // .sort({_id:-1})
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}







export {chatlist};