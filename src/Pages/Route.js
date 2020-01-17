import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/step1" exact component={Page1}/>
      <Route path="/step2" exact component={Page2}/>
    </Switch>
  )
}

export default Routes