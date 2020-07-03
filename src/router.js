import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useTranslate } from "polyglot-react-redux-sdk";

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

function Home() {
  const t = useTranslate("home");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("subTitle")}</h1>
    </div>
  );
}

function App() {
  return <h2>App</h2>;
}

function Login() {
  return <h2>App</h2>;
}
