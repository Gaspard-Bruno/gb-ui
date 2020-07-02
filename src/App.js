import React from 'react';
import styled from 'styled-components';
import config from 'Config';

const StyledTitle = styled.h1`
  color: #db1e3b;
  font-size: 46px;
`;

function App() {
  return (
    <div className="App">
    <StyledTitle>{config.appName}</StyledTitle>
    </div>
  );
}

export default App;
