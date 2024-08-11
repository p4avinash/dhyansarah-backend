import express from 'express';
import { register } from '../controllers/users';
import { validateUserRegistration, handleValidationErrors } from '../validators/user.validator';

const router = express.Router();

router.post('/register',validateUserRegistration, handleValidationErrors,  register)

export default router;