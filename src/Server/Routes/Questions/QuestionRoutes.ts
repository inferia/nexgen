import { showCreate, processCreate } from '../../Controller/QuestionController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const QuestionRoutes: Router = Router();

QuestionRoutes.get('/create', allowOnlyUsers, showCreate);
QuestionRoutes.post('/create', allowOnlyUsers, processCreate);

QuestionRoutes.get('/show', allowOnlyUsers);
QuestionRoutes.get('/show/:id', allowOnlyUsers);

export default QuestionRoutes;
