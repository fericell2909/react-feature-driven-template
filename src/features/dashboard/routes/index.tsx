import DashboardMain from '../pages/DashboardMain';

export const dashboardRoutes = {
  path: 'dashboard',
  children: [
    { index: true, element: <DashboardMain /> },
  ],
};