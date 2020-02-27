import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './Home';
import Sensitization from './Sensitization';
import Participate from './Participate';
import Evaluate from './Evaluate';
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Routes({location}) {
  
  return (
    <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
        <div className="route-section">
          <Switch location={location}>
            <Route path="/" exact component={Home}/>
            <Route path="/sensitization" exact component={Sensitization}/>
            <Route path="/participate" exact component={Participate}/>
            <Route path="/evaluate" exact component={Evaluate}/>
          </Switch>
        </div>
        </CSSTransition>
    </TransitionGroup>
  )
}

export default withRouter(Routes)