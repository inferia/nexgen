import { showCreate, processCreate } from '../../Controller/SubjectController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const SubjectRoutes: Router = Router();

SubjectRoutes.get('/create', allowOnlyUsers, showCreate);
SubjectRoutes.post('/create', allowOnlyUsers, processCreate);

SubjectRoutes.get('/show', allowOnlyUsers);

export default SubjectRoutes;
