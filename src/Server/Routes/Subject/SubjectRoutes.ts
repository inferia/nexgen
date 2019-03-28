import { showCreate, processCreate, listSubjects } from '../../Controller/SubjectController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const SubjectRoutes: Router = Router();

SubjectRoutes.get('/create', allowOnlyUsers, showCreate);
SubjectRoutes.post('/create', allowOnlyUsers, processCreate);

SubjectRoutes.get('/show', allowOnlyUsers, listSubjects);

export default SubjectRoutes;
