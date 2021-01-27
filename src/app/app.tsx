import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as views from './components/views';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/sign-in">
        <views.SignIn />
      </Route>
      <Route path="/sign-up">
        <views.SignUp />
      </Route>
      <Route path="/">
        <Redirect to="/sign-in" />
      </Route>
    </Switch>
  </Router>
);

export default AppRouter;
