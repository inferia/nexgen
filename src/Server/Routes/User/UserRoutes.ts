import UserDashboard from '../../Controller/UserDashboard';
import { allowOnlyUsers } from '../../Middleware/Gate';
import { Router } from 'express';

const UserRoutes: Router = Router();

UserRoutes.get('/dashboard', allowOnlyUsers, UserDashboard);

export default UserRoutes;
