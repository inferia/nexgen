import Question from '../Database/Models/Question';
import { Request, Response } from 'express';

export const showCreate = (
    req: Request,
    res: Response
) => res.render('Question/Create');

export const processCreate = (
    req: Request,
    res: Response
) => {
    if (req.body.board && req.body.std && req.body.module && req.body.subject && req.body.question) {
        return Question.create({
            user_id: req.user._id,
            user_auth0_id: req.user.id,
            board: req.body.board,
            std: req.body.std,
            module: req.body.module,
            subject: req.body.subject,
            question: req.body.question
        }).then(document => {
            res.json(document);
        }).catch(console.log);
    }
};

export const GenerateQPaperOne = (
    req: Request,
    res: Response
) => res.render('Question/Generate/StepOne');

export const GenerateQPaperTwo = (
    req: Request,
    res: Response
) => res.render('Question/Generate/StepTwo');
