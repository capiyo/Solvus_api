
import  Applications from '../../models/Applicants.js'
import uniqid from 'uniqid';

const addApplicants = async (req, res) => {
    const { jobId,workerName,workerEmail,workerId} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const applicant = new  Applications({
        jobId,
        workerEmail,
        workerId,
        workerName,
    
    });

    try {   
        await applicant .save();
        console.log(applicant)
        res.status(201).json(applicant);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};

export {addApplicants};