import { Request, Response, NextFunction } from 'express';

const UserDashboard = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => res.render('dashboard');

export default UserDashboard;
