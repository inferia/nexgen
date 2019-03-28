import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate, processCreate } from '../../Controller/ModuleCreate';

const ModuleRoutes: Router = Router();

ModuleRoutes.get('/create', allowOnlyUsers, showCreate);
ModuleRoutes.post('/create', allowOnlyUsers, processCreate);

ModuleRoutes.get('/show', allowOnlyUsers);

export default ModuleRoutes;
