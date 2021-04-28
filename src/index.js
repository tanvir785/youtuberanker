import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/layout/App';
import 'semantic-ui-css/semantic.min.css'
import { configureStore } from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,rootEl
);