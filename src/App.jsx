import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Redux Store
import reduxStore from './redux';

// MainPage
import { MainPage } from './pages';

// Browser History
const browserHistory = createBrowserHistory();

export default function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter history={browserHistory}>
        <MainPage />
      </BrowserRouter>
    </ReduxProvider>
  );
}
