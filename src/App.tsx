import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './shell/Layout';
import Home from './home/Home';
import Clients from './clients/Clients';
import Client from './clients/Client';
import Examples from './examples/Examples';
import NotFoundPage from './shell/NotFoundPage';
import Forms from './forms/Forms';

const App = () => {
    return (
        <main>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/klientai" component={Clients} />
                        <Route exact path="/klientai/:id" component={Client} />
                        <Route exact path="/pavyzdziai" component={Examples} />
                        <Route exact path="/formos" component={Forms} /> 
                        <Route component={NotFoundPage} />
                    </Switch>
                </Layout>
            </Router>
        </main>
    );
};

export default App;
