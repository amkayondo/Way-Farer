import express from 'express';
import signUp from '../../controllers/users/signup';
import signIn from '../../controllers/users/signin';

const userRouter = express.Router();

userRouter.post('/auth/signup', signUp);
userRouter.post('/auth/signin', signIn);

module.exports = userRouter;
