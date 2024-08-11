import express from 'express';
import { login, register } from '../controllers/users';
import { validateUserRegistration, validateUserLogin, handleValidationErrors } from '../validators/user.validator';

const router = express.Router();

router.post('/register', validateUserRegistration, handleValidationErrors,  register)
router.post('/login', validateUserLogin, handleValidationErrors,  login)

export default router;