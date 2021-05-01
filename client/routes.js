import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import HowTo from './components/HowTo';

class Routes extends Component {
  render() {
    return (
      <div id="game_container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/rules" component={HowTo} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
