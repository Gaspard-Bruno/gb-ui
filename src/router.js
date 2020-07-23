import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, App } from "Pages";
import Navbar from "Components/Navbar";
import Footer from "Components/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Navbar />
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
      <Footer />
    </BrowserRouter>
  );
}
