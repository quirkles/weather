import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configure_store from './store/configure_store';
import Root from './containers/root';

/**
 * Import the app styles. Component specific styles will be imported in those components
 */

import './index.scss';

const store = configure_store();

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/root', () => {
    const RootContainer = require('./containers/root').default;
    render(
      <AppContainer>
        <RootContainer/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
