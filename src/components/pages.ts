import { lazy } from 'react';

const Page1 = lazy(() => import(/* webpackChunkName: 'page1' */ 'pages/Page1'));
const Page2 = lazy(() => import(/* webpackChunkName: 'page2' */ 'pages/Page2'));

export default {
  Page1,
  Page2,
};