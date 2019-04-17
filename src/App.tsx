import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './shell/Layout';
import Home from './home/Home';
import Clients from './clients/Clients';
import Client from './clients/Client';
import NotFoundPage from './shell/NotFoundPage';

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/clients/:id" component={Client} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </Router>        
      </main>
    );
  }
}

export default App;
