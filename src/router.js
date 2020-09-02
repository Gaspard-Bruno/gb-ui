import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login } from "Pages";

import { Page } from "Components/Layout";

// eslint-disable-next-line react/prop-types
const AppRouter = ({ component: Component, path, props }) => {
  return <Route path={path} render={() => <Component {...props} />} />;
};

const routes = [{ path: "/", component: Login }];

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return (
            <AppRouter
              key={route.path}
              path={route.path}
              isPrivate={route.isPrivate}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
