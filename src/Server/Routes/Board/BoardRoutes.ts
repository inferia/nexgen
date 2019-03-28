import { showCreate, processCreate } from '../../Controller/BoardController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const BoardRoutes: Router = Router();

BoardRoutes.get('/create', allowOnlyUsers, showCreate);
BoardRoutes.post('/create', allowOnlyUsers, processCreate);

BoardRoutes.get('/show', allowOnlyUsers);

export default BoardRoutes;
