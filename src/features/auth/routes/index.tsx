import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PATHS from '@/routes/paths';

export const authRoutes = {
  path: 'auth',
  children: [
    { path: PATHS.auth.login, element: <LoginPage /> },
    { path: PATHS.auth.register, element: <RegisterPage /> },
  ],
};