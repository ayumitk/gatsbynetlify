import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import SwitchLanguage from './SwitchLanguage';

class Navbar extends Component {
  state = {
    isActive: false,
    navBarActiveClass: '',
  }

  toggleHamburger = () => {
    this.setState((prevState) => {
      if (prevState.isActive) {
        return {
          isActive: !prevState.isActive,
          navBarActiveClass: '',
        };
      }
      return {
        isActive: !prevState.isActive,
        navBarActiveClass: 'active',
      };
    });
  }

  render() {
    const { navBarActiveClass } = this.state;
    return (
      <nav
        className="navbar"
      >

        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            Ayumi.tk
          </Link>
        </div>

        <button
          className={`d-sm-none navbar-hamburger ${navBarActiveClass}`}
          onClick={this.toggleHamburger}
          type="button"
        >
          <span />
        </button>

        <div
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <Link className="navbar-item" to="/about/">
            About
          </Link>
          <Link className="navbar-item" to="/blog/">
            Blog
          </Link>
          <Link className="navbar-item" to="/work/">
            Work
          </Link>
          <Link className="navbar-item" to="/contact/">
            Contact
          </Link>
          <SwitchLanguage />
        </div>

      </nav>
    );
  }
}

export default Navbar;
