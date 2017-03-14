import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const root = ({store = {}}) => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};

export default root;
