import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppRoutes from './AppRoutes';

class AppRouter extends React.Component {
  render() {
    console.log('render: ');
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              AppRoutes.map((route: IRoute) => route.redirect
                ? (
                  <Redirect
                    key={route.key}
                    from={route.path}
                    exact
                    to={route.redirect}
                  />
                )
                : (
                  <Route
                    key={route.key}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                )
              )
            }
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default AppRouter;
