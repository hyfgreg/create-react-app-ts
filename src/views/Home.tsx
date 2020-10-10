import React from 'react';
import { Route, Redirect, match, Switch, Link } from 'react-router-dom';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';

import HomeRoutes, { HomeMenu } from 'router/HomeRoutes';

interface IProps extends IHistoryProps {
  match: match
  store: IAppStore
}

interface Home {
  props: IProps
}

@inject('store')
@observer
class Home extends React.Component {
  render() {
    const rootPath = this.props.match.url;
    const username = toJS(this.props.store.username);
    return (
      <>
        Hello, {username}!
        {
          HomeMenu.map((menu: IMenu) => (
            <Link key={menu.key} to={`${rootPath}${menu.path}`}>{menu.name}</Link>
          ))
        }
        <Switch>
          {
            HomeRoutes.map((route: IRoute) => route.redirect
              ? <Redirect
                  exact
                  key={route.key}
                  from={`${rootPath}${route.path}`}
                  to={`${rootPath}${route.redirect}`}
                />
              : <Route
                  key={route.key}
                  path={`${rootPath}${route.path}`}
                  exact={route.exact}
                  component={route.component}
                />
            )
          }
        </Switch>
      </>
    );
  }
}

export default Home;

