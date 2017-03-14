import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import DevTools from '../containers/dev_tools';

import {map} from 'ramda';

const stateTransformer = state => map(state_component => state_component.toJS ? state_component.toJS() : state_component, state);

const logger = createLogger({
  stateTransformer
});

const finalCreateStore = compose(
  // Middleware you want to use in development:
  applyMiddleware(thunk, logger),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
)(createStore);

export default initial_state => {
  const store = finalCreateStore(
    rootReducer,
    initial_state
  );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
};
