import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate } from '../../Controller/StdCreate';

const StdRoutes: Router = Router();

StdRoutes.get('/create', allowOnlyUsers, showCreate);
StdRoutes.post('/create', allowOnlyUsers);

StdRoutes.get('/show', allowOnlyUsers);

export default StdRoutes;
