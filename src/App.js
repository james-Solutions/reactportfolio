import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store, { rrfProps } from "./store";

import Footer from "./components/layout/WebFooter";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";

import "./index.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <div>
              <Switch>
                <Route exact={true} path="/" render={() => <Home />} />
                <Route exact={true} path="/about" render={() => <About />} />
                <Route
                  exact={true}
                  path="/contact"
                  render={() => <Contact />}
                />
                <Route exact={true} path="/work" render={() => <Work />} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
