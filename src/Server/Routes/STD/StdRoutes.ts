import { showCreate, processCreate, listSTD, listSTDsJson } from '../../Controller/StdController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const StdRoutes: Router = Router();

StdRoutes.get('/create', allowOnlyUsers, showCreate);
StdRoutes.post('/create', allowOnlyUsers, processCreate);

StdRoutes.get('/show', allowOnlyUsers, listSTD);
StdRoutes.get('/show/json', allowOnlyUsers, listSTDsJson);

export default StdRoutes;
