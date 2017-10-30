import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import {
  routerReducer,
  routerMiddleware as createRouterMiddleware,
} from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import createHistory from 'history/createBrowserHistory';
import * as reducers from './ducks';
import {
  firebaseStateReducer,
  reactReduxFirebase,
  getFirebase,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
// @TODO limit production loggine like this?
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

// import { firebase as firebaseConfig } from '../config';
import firebase from 'services/firebase';

const routerMiddleware = createRouterMiddleware(createHistory());

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
// react-redux-firebase options
const config = {
  // @TODO due to incorrect ts definition in react-redux-firebase all options must be passed
  autoPopulateProfile: true,
  disableEmptyAuthDispatch: false,
  dispatchOnUnsetListener: false,
  enableEmptyAuthChanges: false,
  enableLogging: false,
  enableRedirectHandling: true,
  resetBeforeLogin: true,
  setProfilePopulateResults: false,
  updateProfileOnLogin: true,
  userProfile: 'users',
};

const rootReducer = combineReducers({
  ...reducers,
  firebase: firebaseStateReducer,
  routing: routerReducer,
});

export default function configureStore(initialState: any = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      reactReduxFirebase(firebase, config),
      applyMiddleware(
        thunkMiddleware.withExtraArgument(getFirebase),
        promiseMiddleware,
        routerMiddleware
      )
    )
  );

  // Listen for auth ready (promise available on store thanks to attachAuthIsReady: true config option)
  // store.firebaseAuthIsReady.then(() => {
  //   console.log('Auth has loaded'); // eslint-disable-line no-console
  // });

  // Enable Webpack hot module replacement for reducers
  // if (module.hot) {
  //   module.hot.accept('./store', () => {
  //     const nextRootReducer = require<typeof Store>('./store');
  //     store.replaceReducer(buildRootReducer(nextRootReducer.reducers));
  //   });
  // }

  return store;
}
