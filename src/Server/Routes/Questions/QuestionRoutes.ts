import { 
    showCreate, 
    processCreate, 
    GenerateQPaperOne, 
    GenerateQPaperTwo
} from '../../Controller/QuestionController';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const QuestionRoutes: Router = Router();

QuestionRoutes.get('/create', allowOnlyUsers, showCreate);
QuestionRoutes.post('/create', allowOnlyUsers, processCreate);

QuestionRoutes.get('/paper/create', allowOnlyUsers, GenerateQPaperOne);
QuestionRoutes.get('/paper/create/step2', allowOnlyUsers, GenerateQPaperTwo);

QuestionRoutes.get('/show', allowOnlyUsers);
QuestionRoutes.get('/show/:id', allowOnlyUsers);

export default QuestionRoutes;
