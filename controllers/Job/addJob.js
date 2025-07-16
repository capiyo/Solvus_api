import Job from '../../models/Job.js'
import uniqid from 'uniqid';

const addJob = async (req, res) => {
    const { jobTitle,posterId,bossPhone,status,posterName,postedTime,postedDay,location,description,budget,deadline} = req.body;

    console.log("Data on backend");
    console.log(req.body);

    const job = new Job({
        jobID: uniqid(),
       jobTitle,
       postedDay,
       postedTime,
       posterName,
       bossPhone,
       location,
       status,
       deadline,
       description,
       budget,
       posterId
    });

    try {   
        await job.save();
        //console.log(job)
        res.status(201).json(job);
    } catch (error) {
        console.log(error)
        res.status(409).json({ message: error.message });
    }
};

export {addJob};