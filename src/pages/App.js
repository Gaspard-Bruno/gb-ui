import { useTranslate } from "polyglot-react-redux-sdk";
import React from "react";

function App() {
  const t = useTranslate("app");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h1>{t("subTitle")}</h1>
    </div>
  );
}

export default App;
