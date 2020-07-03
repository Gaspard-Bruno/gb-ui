import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, App } from "Pages";
import Navbar from "Components/Navbar";
import { Link } from "Components/Text";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/App">App</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </Navbar>
      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/App">
          <App />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
