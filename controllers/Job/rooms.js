import Chats from '../../models/chats.js'
import Job from '../../models/Job.js';
import Users from '../../models/User.js';

const rooms = async (req, res) => {
 const  myId=req.params._id
    try {
        const chats = await Chats.find();
       

    for(let i=0;i<chats.length;i++) {
            if(chats[i].posterId===myId)
            {
                console.log("Idah my love")
        }
        else{
            console.log(myId)
        }
    }

        //const posterId = chats.map(chats => chats.posterId);
        //const olderUsers = chats.filter(chats => chats.posterId===myId);
      

        console.log(chats[0].posterId)

        // getMyJobs(chats.jobID)
     //   }
       // .sort({_id:-1})
        res.status(200).json(chats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
 export {rooms}