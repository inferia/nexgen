import { Request, Response, NextFunction } from 'express';

const UserDashboard = (
	req: Request, 
	res: Response, 
	next: NextFunction
) => {
	const { ...userProfile } = req.user;

	res.render('dashboard')
};

export default UserDashboard;
