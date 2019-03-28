import { showCreate, processCreate, listBoards } from '../../Controller/BoardController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const BoardRoutes: Router = Router();

BoardRoutes.get('/create', allowOnlyUsers, showCreate);
BoardRoutes.post('/create', allowOnlyUsers, processCreate);

BoardRoutes.get('/show', allowOnlyUsers, listBoards);

export default BoardRoutes;
