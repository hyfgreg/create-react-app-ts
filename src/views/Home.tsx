import React from 'react';
import { Route, Redirect, match, Switch } from 'react-router-dom';
// import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import { Layout } from 'antd';

import HomeRoutes from 'router/HomeRoutes';

const { Header } = Layout

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
    // const username = toJS(this.props.store.username);
    return (
      <>
      <Layout className="layout">
        <Header>
          <div className="app-header__logo" style={{ textAlign: 'left' }}>Xmov</div>
        </Header>
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
      </Layout>
      </>
    );
  }
}

export default Home;

