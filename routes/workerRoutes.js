import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

//import { addCase } from '../controllers/Case/assignWorker/addChats.js';
//import { getChats } from '../controllers/Case/assignWorker/getChats.js';
//import { getChats } from '../controllers/Case/WorkerChats/getChats.js';
import { addChats } from '../controllers/Case/WorkerChats/addChats.js';
import { getWorkerChats } from '../controllers/Case/workerChats/getWorkerChats.js';
import{ getJobs} from "../controllers/Job/getJobs.js"
import { firstChat } from '../controllers/Job/firstChat.js';

router.post('/addWorkerChats', addChats); 
router.get('/getWorkerChats',getWorkerChats); 



export default router;