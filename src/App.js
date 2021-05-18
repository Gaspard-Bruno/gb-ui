import React from 'react';
import AppRouter from 'showcase';
import ReactDOM from 'react-dom';

import './wdyr';
import * as serviceWorker from './serviceWorker';

// import './reset.css';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
function App() {
  return <AppRouter />;
}

ReactDOM.render(<App />, document.getElementById('root'));

App.whyDidYouRender = {
  logOnDifferentValues: true,
  customName: 'App'
};
export default App;
