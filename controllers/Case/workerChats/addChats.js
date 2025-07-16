import  WorkerModel from '../../../models/workerModel.js'
import uniqid from 'uniqid';

const addChats= async (req, res) => {
    const { caseId,posterId,workerId,message} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const newChat = new WorkerModel({
        caseId,
       posterId,workerId,message
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

export {addChats};