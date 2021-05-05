import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  <PersistGate persistor={persistor}>
  <App />
</PersistGate>
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// reportWebVitals();
