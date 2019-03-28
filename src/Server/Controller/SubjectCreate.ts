import Subject from '../Database/Models/Subject';
import { Request, Response } from 'express';
import * as validator from 'validator';

export const showCreate = (
	req: Request,
	res: Response
) => {
	res.render('Subject/Create');
};

export const processCreate = (
	req: Request,
	res: Response
) => {
	if(req.body.subject && validator.isAlphanumeric(req.body.subject) && req.body.subject.length > 3) {
		return Subject.create({
			user_id: req.user._id,
			user_auth0_id: req.user.id,
			name: req.body.subject
		}).then(document => res.json({done: 'lol'}))
		.catch(console.log);
	}

	return res.status(500).json({nah: 'lol'});
};
