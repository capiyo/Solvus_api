import express from 'express';
//import User from '../models/User.js';

const router = express.Router();

import { getUsers } from '../controllers/User/getUsers.js';
import {addProfile} from "../controllers/User/addProfile.js";
import { getProfile } from '../controllers/User/getProfile.js';
import { getUser } from '../controllers/User/getUser.js';
import { addUser } from '../controllers/User/addUser.js';
import { deleteUser } from '../controllers/User/deleteUser.js';
import { updateUser } from '../controllers/User/updateUser.js';
import { updateUserByCandidate } from '../controllers/User/updateUserByCandidate.js';

router.get('/all-users', getUsers); 
router.get('/getProfile', getProfile); 

router.post('/add-user', addUser);
router.post('/add-profile', addProfile);

router.get('/user/:id', getUser); 
router.delete('/delete-user/:id', deleteUser); 
router.put('/update-user/:id', updateUser);
router.put('/update-user-by-candidate/', updateUserByCandidate);

export default router;