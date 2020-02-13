import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Sensitization from './Sensitization';
import Participate from './Participate';

function Routes() {
  
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/sensitization" exact component={Sensitization}/>
      <Route path="/participate" exact component={Participate}/>
    </Switch>
  )
}

export default Routes