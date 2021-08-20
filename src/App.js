import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
          <BrowserRouter>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
              <Route exact path="/work">
                <Work />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
