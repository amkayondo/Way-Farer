import express from 'express';
import signUp from '../../controllers/users/signup';
import Validator from '../../middleware/validators/validateInput';
import signIn from '../../controllers/users/signin';

const userRouter = express.Router();

userRouter.post('/auth/signup', Validator.userSiginup, signUp);
userRouter.post('/auth/signin', Validator.userSignin, signIn);

module.exports = userRouter;
