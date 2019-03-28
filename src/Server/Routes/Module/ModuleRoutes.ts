import { showCreate, processCreate } from '../../Controller/ModuleCreate';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const ModuleRoutes: Router = Router();

ModuleRoutes.get('/create', allowOnlyUsers, showCreate);
ModuleRoutes.post('/create', allowOnlyUsers, processCreate);

ModuleRoutes.get('/show', allowOnlyUsers);

export default ModuleRoutes;
