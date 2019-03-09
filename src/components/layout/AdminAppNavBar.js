import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem } from 'react-materialize';

export default class AdminAppNavBar extends Component {
  static propTypes = {
    isAbout: PropTypes.string,
    isWork: PropTypes.string,
    isBlog: PropTypes.string
  };
  render() {
    const { isAbout, isWork, isBlog } = this.props;
    return (
      <Navbar brand="Admin" right className="light-blue">
        <NavItem className={isAbout} href="/admin/about">
          About
        </NavItem>
        <NavItem className={isWork} href="/admin/work">
          My Work
        </NavItem>
        <NavItem className={isBlog} href="/admin/blog">
          Blog
        </NavItem>
      </Navbar>
    );
  }
}
