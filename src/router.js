import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  Home,
  Login,
  About,
  ServicesPage,
  FooterPages,
  BecomePage
} from "Pages";

import Navbar from "Components/Navbar";
import Footer from "Components/Footer";

// eslint-disable-next-line react/prop-types
const AppRouter = ({ component: Component, path, props }) => {
  return <Route path={path} render={() => <Component {...props} />} />;
};

const routes = [
  { path: "/FAQs", component: FooterPages.FooterPages },
  { path: "/TermsAndConditions", component: FooterPages.TermsAndConditions },
  { path: "/PrivacyPolicy", component: FooterPages.PrivacyPolicy },
  { path: "/Login", component: Login },
  { path: "/services", component: ServicesPage },
  { path: "/about", component: About },
  { path: "/become", component: BecomePage },
  { path: "/", component: Home }
];

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  );
}
