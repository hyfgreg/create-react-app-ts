import { lazy } from 'react';

const Login = lazy(() => import(/* webpackChunkName: 'login' */ 'views/Login'));
const Home = lazy(() => import(/* webpackChunkName: 'home' */ 'views/Home'));
const NotFound = lazy(() => import(/* webpackChunkName: '404' */ 'views/NotFound'));

export default {
  Login,
  Home,
  NotFound,
};
