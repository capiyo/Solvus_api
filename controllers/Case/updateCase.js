import Case from '../../models/case.js'
//import { updateJob } from './updateJob.js';

const update = async (req, res) => {
    try {
     //console.log(reached)
        //const { status } = req.body.status;

        // Find the job by jobId
        const myUpdate = await Case.find({"caseId":req.params.caseId})

           // jobID,
          //  { $push: { applicants: { applicant: candidateID, status:status } } },
            //{ new: true } // To return the updated document

           myUpdate.status = req.body.status;
    await myUpdate.save();
        

        if (!myUpdate) {
            return res.status(404).json({ error: 'unsuccessful' });
        }

        res.status(200).json(myUpdate);
    } catch (error) {
     console.log(error)
        res.status(500).json({ error: 'success' });
    }
}

export { update };