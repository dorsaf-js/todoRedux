
import './index.css';
import App from './App';
import{Provider} from 'react-redux';
import store from './js/store';
import reactDom from 'react-dom';
import React from 'react';

reactDom.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


