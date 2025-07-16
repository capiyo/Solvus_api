import  Case from '../../../models/case.js'
import uniqid from 'uniqid';

const addCase = async (req, res) => {
    const { caseId,caseTitle,posterName,posterId,posterEmail,workerId,workerName,workerEmail,status,message} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const newcase = new Case({
        caseId,
        caseTitle,
        posterName,
        posterId,posterEmail,workerId,workerName,workerEmail,status,message
      
    });

    try {   
        await newcase.save();
        //console.log(job)
        res.status(201).json(newcase);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};

export {addCase};