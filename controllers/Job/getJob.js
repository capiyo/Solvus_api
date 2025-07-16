import mongoose from 'mongoose';
import Job from '../../models/Job.js'

const getJob = async (req, res) => {
    try {
        const jobId = req.params.jobID;
       // const jobId=new mongoose.Types.ObjectId(myId)
      //console,log(typeof(jobId))
        const job = await Job.findById(jobId);
        if (!job) {
            console.log("Not found")
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
         console.log(error)
    }
};

export {getJob};