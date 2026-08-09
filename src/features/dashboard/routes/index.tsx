import DashboardMain from '../pages/DashboardMain';

export const dashboardRoutes = {
  path: 'dashboard',
  children: [
    { index: true, path:'/dashboard',  element: <DashboardMain /> },
  ],
};