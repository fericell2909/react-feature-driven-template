import LoginPage from '../pages/LoginPage';

export const authRoutes = {
  path: 'auth',
  children: [
    { path: '/auth/login', element: <LoginPage /> },
    // { path: 'register', element: <RegisterPage /> },
  ],
};