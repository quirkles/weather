import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';
import DevTools from './dev_tools';

const root = ({store = {}}) => {

  return (
    <Provider store={store}>
      <div>
        <App/>
        <DevTools/>
      </div>
    </Provider>
  );
};

export default root;
