import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

import {getJobs} from '../controllers/Job/getJobs.js';
import { getLikes } from '../controllers/Job/getlikes.js';
import {getJob } from '../controllers/Job/getJob.js';
import {addJob} from '../controllers/Job/addJob.js';
import {addlikes} from "../controllers/Job/addlikes.js"
import {addApplicants} from "../controllers/Job/applicants.js"
import {getApplicants} from "../controllers/Job/getApplicants.js"


import { deleteJob } from '../controllers/Job/deleteJob.js';
import { updateJob } from '../controllers/Job/updateJob.js';
import { updateJobByCandidate } from '../controllers/Job/updateJobByCandidate.js';

router.get('/all-jobs', getJobs); 
router.get('/applicants', getApplicants); 
router.get("/getlikes/:jobId",getLikes)
router.post('/addlikes',addlikes)
router.post('/add-applicants',addApplicants)
router.post('/my-jobs',getJobs)

router.post('/post-job', addJob); 
router.get('/current-job/:jobID', getJob); 
router.delete('/delete-job/:id', deleteJob); 
router.put('/update-job/:id', updateJob);
router.put('/update-job-by-candidate/', updateJobByCandidate);


export default router;