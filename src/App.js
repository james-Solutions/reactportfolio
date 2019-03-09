import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

import Footer from './components/layout/WebFooter';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import NotFound from './components/pages/NotFound';

import EditWork from './components/admin/EditWork';

import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route exact path="/about" render={() => <About />} />
              <Route exact path="/contact" render={() => <Contact />} />
              <Route exact path="/blog" render={() => <Blog />} />
              <Route
                exact
                path="/work"
                render={() => <Work isAdmin={false} />}
              />
              <Route exact path="/admin/work" render={() => <EditWork />} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
