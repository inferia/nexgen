import { Request, Response } from 'express';

export const showCreate = (
	req: Request,
	res: Response
) => {
	res.render('STD/Create');
};
