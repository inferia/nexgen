import { Request, Response } from 'express';
import STD from '../Database/Models/STD';
import * as validator from 'validator';

export const showCreate = (
    req: Request,
    res: Response
) => res.render('STD/Create');

export const processCreate = (
    req: Request,
    res: Response
) => { 
    if(req.body.std && validator.isNumeric(req.body.std)) {
        return STD.create({
            user_id: req.user._id,
            user_auth0_id: req.user.id,
            name: req.body.std
        }).then(document => res.redirect('/std/show'))
        .catch(console.log);
    }

    return res.status(500).json({nah: 'lol'});
};

export const listSTD = (
    req: Request, 
    res: Response
) => STD.where('user_auth0_id', req.user.id)
    .find()
    .then(document => res.render('STD/Show', { documents: document }))
    .catch(console.log);

export const listSTDsJson = (
    req: Request,
    res: Response
) => STD.where('user_auth0_id', req.user.id)
    .find()
    .select('name -_id')
    .then(documents => {
        let document = [];
        documents.forEach(value => {
            document.push({
                name: value.name,
                value: value.name
            });
        });
        res.json({ success: true, results: document });
    }).catch(console.log);
