import { showCreate, processCreate, listModules, listModulesJson } from '../../Controller/ModuleController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const ModuleRoutes: Router = Router();

ModuleRoutes.get('/create', allowOnlyUsers, showCreate);
ModuleRoutes.post('/create', allowOnlyUsers, processCreate);

ModuleRoutes.get('/show', allowOnlyUsers, listModules);
ModuleRoutes.get('/show/json', allowOnlyUsers, listModulesJson);

export default ModuleRoutes;
