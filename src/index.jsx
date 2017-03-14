import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/root';

/**
 * Import the app styles. Component specific styles will be imported in those components
 */

import './index.scss';

render(
  <AppContainer>
    <Root/>
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
