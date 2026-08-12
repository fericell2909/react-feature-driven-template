import ListUsersPage from '../pages/ListUsersPage';
import PATHS from '@/routes/paths';

export const userRoutes = {
  path: 'management',
  children: [
    { path: PATHS.users.list, element: <ListUsersPage /> }
  ],
};