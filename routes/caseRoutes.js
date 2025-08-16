import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

import { addCase } from '../controllers/Case/assignWorker/addNotification.js';
import { addAdmin } from '../controllers/Case/admins.js';
import { addChats } from '../controllers/Case/workerChats/addChats.js';
import { getNotification } from '../controllers/Case/assignWorker/getNotification.js';
//import { getChats } from '../controllers/Case/WorkerChats/getChats.js';

router.post('/addWorkerChats', addChats); 
router.post("/addAdmin",addAdmin)
router.get('/getWorkerChats',getNotification ); 



export default router;