import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate, processCreate } from './../../Controller/BoardCreate';

const BoardRoutes: Router = Router();

BoardRoutes.get('/create', allowOnlyUsers, showCreate);
BoardRoutes.post('/create', allowOnlyUsers, processCreate);

BoardRoutes.get('/show', allowOnlyUsers);

export default BoardRoutes;
