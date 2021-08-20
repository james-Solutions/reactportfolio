import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import PropTypes from "prop-types";

export default class AppNavBar extends Component {
  static propTypes = {
    isHome: PropTypes.string,
    isAbout: PropTypes.string,
    isWork: PropTypes.string,
    isContact: PropTypes.string,
    // isBlog: PropTypes.string
  };
  render() {
    const { isHome, isAbout, isWork, isContact } = this.props;
    return (
      <Navbar options={{ edge: "right" }} className="light-blue">
        <NavItem className={isHome} href="/">
          Home
        </NavItem>
        <NavItem className={isAbout} href="/about">
          About
        </NavItem>
        <NavItem className={isWork} href="/work">
          My Work
        </NavItem>
        <NavItem className={isContact} href="/contact">
          Contact
        </NavItem>
        {/* <NavItem className={isBlog} href="/blog">
          Blog
        </NavItem> */}
      </Navbar>
    );
  }
}
