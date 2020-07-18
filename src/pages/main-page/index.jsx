import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import mainPageStyles from './main-page.module.scss';

// Page Imports
import { HomePage } from '../';

export default function MainPage() {
  return (
    <>
      <Switch>
        <Route path={`/`} exact component={HomePage} />
      </Switch>
    </>
  )
}
