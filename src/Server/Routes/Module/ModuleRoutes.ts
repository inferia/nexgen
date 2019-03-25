import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate } from '../../Controller/ModuleCreate';

const ModuleRoutes: Router = Router();

ModuleRoutes.get('/create', allowOnlyUsers, showCreate);
ModuleRoutes.post('/create', allowOnlyUsers);

ModuleRoutes.get('/show', allowOnlyUsers);

export default ModuleRoutes;
