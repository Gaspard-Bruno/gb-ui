import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

import { Home, Login, App } from "Pages";
import Navbar from "Components/Navbar";
import Footer from "Components/Footer";

const AppRouter = ({ component: Component, path, props }) => {
  return <Route path={path} render={() => <Component {...props} />} />;
};

const routes = [
  { path: "/Login", component: Login },
  { path: "/App", component: App },
  { path: "/", component: Home },
];

export default function Router() {
  const history = useHistory();

  useEffect(() => {
    console.log("history", history);
  }, [history]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routes.map((route, index) => {
          return (
            <AppRouter
              path={route.path}
              isPrivate={route.isPrivate}
              component={route.component}
            />
          );
        })}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
