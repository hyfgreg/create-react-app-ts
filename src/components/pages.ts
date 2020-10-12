import { lazy } from 'react';

const ProjectList = lazy(() => import(/* webpackChunkName: 'page1' */ 'pages/ProjectList'));
const Page2 = lazy(() => import(/* webpackChunkName: 'page2' */ 'pages/Page2'));

export default {
  ProjectList,
  Page2,
};