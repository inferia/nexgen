import Module from '../Database/Models/Module';
import { Request, Response } from 'express';
import * as validator from 'validator';

export const showCreate = (
	req: Request,
	res: Response
) => {
	res.render('Module/Create');
};

export const processCreate = (
	req: Request,
	res: Response
) => {
	if(req.body.module && validator.isNumeric(req.body.module)) {
		return Module.create({
			user_id: req.user._id,
			user_auth0_id: req.user.id,
			name: req.body.module
		}).then(document => res.json({done: 'lol'}))
		.catch(console.log);
	}

	return res.status(500).json({die: 'lol'});
};

export const listModules = (
	req: Request,
	res: Response
) => {
	return Module.where('user_auth0_id', req.user.id).find().then(document => {
		res.json(document);
	}).catch(console.log);
};
