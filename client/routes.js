import React, { Component } from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import HowTo from './components/HowTo';

class Routes extends Component {
  render() {
    return (
      <div id="game_container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/rules" component={HowTo} />
          <Route path="*" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
