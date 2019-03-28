import Board from '../Database/Models/Board';
import { Request, Response } from 'express';
import * as validator from 'validator';

export const showCreate = (
	req: Request,
	res: Response
) => {
	res.render('Board/Create');
};

export const processCreate = (req: Request, res: Response) => {
	if (req.body.board && validator.isAlphanumeric(req.body.board) && req.body.board.length > 3) {
		return Board.create({
			user_id: req.user._id,
			user_auth0_id: req.user.id,
			name: req.body.board
		}).then(boardDone => res.json({done: 'lol'}))
		.catch(console.log);
	}

	return res.status(500).json({ nah: 'lol' });
};
