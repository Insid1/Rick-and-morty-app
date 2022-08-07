import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';

import Router from '../router/router';
import Header from '../components/common/header/header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
