import { Router } from 'express';
import UserDashboard from '../../Controller/UserDashboard';

const UserRoutes: Router = Router();

UserRoutes.get('/dashboard', UserDashboard);

export default UserRoutes;
