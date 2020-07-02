import React from 'react';
import styled from 'styled-components';
import config from 'Config';
import AppRouter from "./router";

const StyledTitle = styled.h1`
  color: #db1e3b;
  font-size: 46px;
`;

function App() {
  return (
    <div className="App">
    <StyledTitle>{config.appName}</StyledTitle>
    <AppRouter/>
    </div>
  );
}

export default App;
