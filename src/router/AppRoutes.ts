import Views from 'components/views';

const AppRoutes: IRoute[] = [
  {
    path: '/',
    key: 'root',
    redirect: '/login',
  },
  {
    path: '/login',
    key: 'login',
    exact: true,
    component: Views.Login,
  },
  {
    path: '/home',
    key: 'home',
    exact: false,
    component: Views.Home,
  },
  {
    path: '*',
    key: '404',
    component: Views.NotFound,
  },
];

export default AppRoutes;

