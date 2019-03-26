import { Router } from 'express';
import { allowOnlyUsers } from '../../Middleware/Gate';
import UserDashboard from '../../Controller/UserDashboard';

const UserRoutes: Router = Router();

UserRoutes.get('/dashboard', allowOnlyUsers, UserDashboard);

export default UserRoutes;
