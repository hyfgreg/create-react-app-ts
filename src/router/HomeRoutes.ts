import Views from 'components/views';
import Pages from 'components/pages';

/**
 * 根路由 /home
 */

const HomeRoutes: IRoute[] = [
  {
    path: '',
    key: 'root-home',
    redirect: '/project-list',
  },
  {
    path: '/project-list',
    key: 'project-list',
    exact: true,
    component: Pages.ProjectList,
  },
  {
    path: '/page2',
    key: 'page2',
    exact: true,
    component: Pages.Page2,
  },
  {
    path: '*',
    key: '404',
    component: Views.NotFound,
  }
];

// 用于页面显示
export const HomeMenu: IMenu[] = [
  {
    path: '/page1',
    name: '页面1',
    key: 'page1',
  },
  {
    path: '/page2',
    name: '页面2',
    key: 'page2',
  },
]

export default HomeRoutes;

