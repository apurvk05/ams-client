// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App';
import Splash from './splash';
import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
const DELAY = 2000; // 2 seconds

const Root = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, DELAY);
  }, []);

  return (
    <React.Fragment>
      {showSplash ? <Splash /> : null}
      {showSplash ? null : <App />}
    </React.Fragment>
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>
);



// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


