import express from 'express';
import { GetAllUser, userRegistration } from '../controllers/User.js';
const router = express.Router();

// Public Routes
router.post('/register', userRegistration)
router.get('/all-user', GetAllUser)

export default router