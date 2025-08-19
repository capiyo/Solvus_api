import  Chatlist from '../../../models/chatlist.js'
import uniqid from 'uniqid';

const addChatlist= async (req, res) => {
    const { jobId,budget,status,role, jobTitle} = req.body;

    console.log("Data on backend");
    //console.log(req.body);

    const newChat = new Chatlist({
         jobId,budget,status,role, jobTitle
      
    });

    try {   
        await newChat.save();
        //console.log(job)
        res.status(201).json(newChat);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};



export {addChatlist};