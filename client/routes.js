import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Routes);
