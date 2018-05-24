import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Buttonzon from '../views/buttonzon';
import Phrase from '../views/phrase';

class Routes extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Buttonzon} />
            <Route exact path="/phrase" component={Phrase} />
          </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
