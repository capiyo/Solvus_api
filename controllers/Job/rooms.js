import Chats from '../../models/chats.js'
import Job from '../../models/Job.js';
import Users from '../../models/User.js';
import Case from '../../models/case.js';

const rooms = async (req, res) => {
    //var chatlist=[]
    //console.log("Hellooooo")
 const  myId=req.params
// console.log(myId)
    try {
        let chatlist=[]
        const chats = await Chats.find();
          
            //console.log(chats)
       



        //const posterId = chats.map(chats => chats.posterId);
        //const olderUsers = chats.filter(chats => chats.posterId===myId);
      

       // console.log(chats[0].posterId)

        // getMyJobs(chats.jobID)
     //   }
       // .sort({_id:-1})
        //
        //console.log(chatlits)
        res.status(200).json(chats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

function findJob(chats){
     for(var i=0;i<=chats.length;i++) {
            if(chats[i].posterId===myId["userId"])
            {
                console.log(chats[i].posterId,myId['userId'])
                 const job =  Case.findById(chats[i].caseId);
                 console.log(job)
                res.status(200).json(job);
                    //console.log(job)
                     //res.status(200).json(job);

              
        }
        else{
             //for (const key in myId) {
        //console.log(myId["userId"]); 
    //}
           // console.log(Object.values(myId));
            //console.log(req.params.userId)
        }
    }
}









 export {rooms}