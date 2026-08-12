const PATHS = {
  root: '/',
  auth: {
    login: '/auth/login',
    register: '/auth/register',
  },
  dashboard: {
    dashboard: '/dashboard',
    profile: '/dashboard/profile',
    settings: '/dashboard/settings',
  },
  users: {
    list: 'users',
    create: 'users/create',
    edit: (id: number) => `users/edit/${id}`,
  },
}


export default PATHS;