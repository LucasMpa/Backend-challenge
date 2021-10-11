
import { Router } from 'express';
import passwordRouter from '../modules/PasswordVerify/routes/passwordVerify.routes';

const routes = Router();

routes.use('/password', passwordRouter);

export default routes;
