import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { showCreate } from './../../Controller/BoardCreate';

const BoardRoutes: Router = Router();

BoardRoutes.get('/create', allowOnlyUsers, showCreate);
BoardRoutes.post('/create', allowOnlyUsers);

BoardRoutes.get('/show', allowOnlyUsers);

export default BoardRoutes;
