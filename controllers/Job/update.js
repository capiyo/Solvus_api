import Job from '../../models/Job.js'
//import { updateJob } from './updateJob.js';

const update = async (req, res) => {
    try {
        //const { status } = req.body.status;

        // Find the job by jobId
        const myUpdate = await Job.findById(req.body.id)

           // jobID,
          //  { $push: { applicants: { applicant: candidateID, status:status } } },
            //{ new: true } // To return the updated document

            myUpdate.status = req.body.status;
    await myUpdate.save();
        

        if (!myUpdate) {
            return res.status(404).json({ error: 'Job not found' });
        }

        res.status(200).json(myUpdate);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update job by candidate' });
    }
}

export { update };