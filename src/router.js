import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login, Dashboard } from "Pages";

import { Page } from "Components/Layout";

// eslint-disable-next-line react/prop-types
const AppRouter = ({ component: Component, path, props, exact }) => {
  return (
    <Route path={path} exact={exact} render={() => <Component {...props} />} />
  );
};

const routes = [
  { path: "/", component: Login, exact: true },
  {
    path: "/dashboard",
    component: Dashboard
  }
];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return (
            <AppRouter
              key={route.path}
              path={route.path}
              exact={route.exact}
              isPrivate={route.isPrivate}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
