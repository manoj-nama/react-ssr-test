import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './utils/routes';

export const MainApp = (
  <Router routes={routes} history={browserHistory} />
);

render(MainApp, document.getElementById('main'));