import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate } from '../../Controller/SubjectCreate';

const SubjectRoutes: Router = Router();

SubjectRoutes.get('/create', allowOnlyUsers, showCreate);
SubjectRoutes.post('/create', allowOnlyUsers);

SubjectRoutes.get('/show', allowOnlyUsers);

export default SubjectRoutes;
