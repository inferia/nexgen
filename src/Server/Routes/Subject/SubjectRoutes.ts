import { showCreate, processCreate, listSubjects, listSubjectsJson } from '../../Controller/SubjectController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const SubjectRoutes: Router = Router();

SubjectRoutes.get('/create', allowOnlyUsers, showCreate);
SubjectRoutes.post('/create', allowOnlyUsers, processCreate);

SubjectRoutes.get('/show', allowOnlyUsers, listSubjects);
SubjectRoutes.get('/show/json', allowOnlyUsers, listSubjectsJson);

export default SubjectRoutes;
