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
import { getChatlist } from '../controllers/Case/workerChats/getChatlist.js';


import { deleteJob } from '../controllers/Job/deleteJob.js';
import { updateJob } from '../controllers/Job/updateJob.js';
import { updateJobByCandidate } from '../controllers/Job/updateJobByCandidate.js';
import { update } from '../controllers/Job/update.js';
import { rooms } from '../controllers/Job/rooms.js';
import { chatlist } from '../controllers/Job/chatlist.js';
import { addChatlist } from '../controllers/Case/workerChats/addChatlist.js';

router.get('/all-jobs', getJobs); 
router.get('/applicants', getApplicants); 
router.get('/getChatlist', getChatlist); 
router.get("/getlikes/:jobId",getLikes)
router.post('/addlikes',addlikes)
router.post('/add-applicants',addApplicants)
router.post('/my-jobs',getJobs)

router.get('/getRooms/:userId',rooms)

router.post('/post-job', addJob); 
router.post('/addChatlist', addChatlist); 
router.get('/current-job/:jobID', getJob); 
router.put('/current-job/update', update); 
router.delete('/delete-job/:id', deleteJob); 
router.put('/update-job/:id', updateJob);
router.put('/update-job-by-candidate/', updateJobByCandidate);


export default router;