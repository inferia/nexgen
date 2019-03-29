import { showCreate, processCreate, listBoards, listBoardsJson } from '../../Controller/BoardController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const BoardRoutes: Router = Router();

BoardRoutes.get('/create', allowOnlyUsers, showCreate);
BoardRoutes.post('/create', allowOnlyUsers, processCreate);

BoardRoutes.get('/show', allowOnlyUsers, listBoards);
BoardRoutes.get('/show/json', allowOnlyUsers, listBoardsJson);

export default BoardRoutes;
