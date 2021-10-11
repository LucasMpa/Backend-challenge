import { Router } from 'express';
import PasswordVerifyController from '../controllers/PasswordVerifyController';

const passwordRouter = Router();

passwordRouter.post("/", PasswordVerifyController);


export default passwordRouter;
