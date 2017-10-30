import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './register-service-worker';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './state/configure-store';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import './index.css';
import './styles/main.less';

const history = createHistory();
const store = configureStore();

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </LocaleProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
