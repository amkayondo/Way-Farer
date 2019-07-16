import express from 'express';
import signUp from '../../controllers/users/signup';

const userRouter = express.Router();

userRouter.post('/auth/signup', signUp);

module.exports = userRouter;
