import express from 'express';

//Import all controllers
import {createUser, getAllUsers, getUserInfoByID, loginUser} from '../controllers/user.controller.js';
import {protect} from '../controllers/protectController.js';

const router = express.Router();

router.route('/signup').post(createUser);
router.route('/login').post(loginUser);
router.route('/getUsers').get(protect, getAllUsers);
router.route('/:id').get(protect, getUserInfoByID);

export default router;