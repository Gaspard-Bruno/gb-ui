import React from 'react';
import AppRouter from 'showcase';
import ReactDOM from 'react-dom';

import './wdyr';

// import './reset.css';
function App() {
  return <AppRouter />;
}

ReactDOM.render(<App />, document.getElementById('root'));

App.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'App'
};
export default App;
