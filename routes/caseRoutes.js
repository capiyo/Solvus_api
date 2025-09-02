import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

import { addCase } from '../controllers/Case/assignWorker/addNotification.js';
import { addAdmin } from '../controllers/Case/admins.js';
import { addChats } from '../controllers/Case/workerChats/addChats.js';
//import { getNotification } from '../controllers/Case/assignWorker/getNotification.js';
import { getWorkerChats } from '../controllers/Case/workerChats/getWorkerChats.js';
import { getNotification } from '../controllers/Case/getNotification.js';
//import { getChats } from '../controllers/Case/WorkerChats/getChats.js';
import { update } from '../controllers/Case/updateCase.js';
import { addNotification } from '../controllers/Case/addNotification.js';

router.post('/addWorkerChats', addChats); 
router.post("/addAdmin",addAdmin)
router.post("/addNotification",addNotification)
router.get('/getWorkerChats',getWorkerChats ); 
router.get('/getNotifications/:userId',getNotification); 
router.put("/current-case/update",update)




export default router;