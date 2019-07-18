import React, { Component } from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import SwitchLanguage from './SwitchLanguage';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${props => props.theme.maxWith};
  margin: 0 auto;
  width: 100%;
  height: 64px;
`;

const Logo = styled(Link)`
  color: ${props => props.theme.color.pink500};
  text-decoration:none;
  font-size: 3rem;
  font-weight: 700;
  &:hover{
    color: ${props => props.theme.color.pink500};
    text-decoration:none;
    opacity: 0.8;
  }
`;

const HamburgerButton = styled.button`
  @media (min-width: 992px) {
    display:none;
  }
  width: 25px;
  height: 25px;
  padding: 0;
  border: 0;
  background: transparent;

  span,
  span::before,
  span::after {
    position: absolute;
    height: 2px;
    width: 25px;
    background: ${props => props.theme.color.black};
    display: block;
    content: "";
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  span:before {
    top: -8px;
  }

  span:after {
    bottom: -8px;
  }

  &.active {
    span::before {
      transform: rotate(-45deg);
      top: 0;
    }

    span {
      background: transparent;
    }

    span::after {
      transform: rotate(45deg);
      bottom: 0;
    }
  }
`;

const Nav = styled.div`
  @media (min-width: 992px) {
    display: flex;
  }
  @media (max-width: 991.98px) {
    display: none;
  }
  a{
    color: ${props => props.theme.color.black};
    display: block;
    @media (min-width: 992px) {
      margin-right: 2rem;
    }
    &:hover{
      color: ${props => props.theme.color.black};
      opacity: 0.8;
    }
  }

  &.active {
    display: block;
    background: ${props => props.theme.color.blue800};
    width: 100%;
    position: absolute;
    left: 0;
    top: 64px;
    z-index: 9999;

    a {
      color: #fff;
      padding: 1.5rem;
      border-bottom: solid 1px rgba(255, 255, 255, 0.1);
      text-align: center;
    }
  }
`;
class Navbar extends Component {
  state = {
    isActive: false,
  }

  toggleHamburger = () => {
    this.setState((prevState) => {
      if (prevState.isActive) {
        return {
          isActive: !prevState.isActive,
        };
      }
      return {
        isActive: !prevState.isActive,
      };
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Header>

        <Logo to="/" title="Logo">Ayumi.tk</Logo>

        <HamburgerButton
          className={isActive ? 'active' : ''}
          onClick={this.toggleHamburger}
          type="button"
        >
          <span />
        </HamburgerButton>

        <Nav
          className={isActive ? 'active' : ''}
        >
          <Link to="/about/">
            About
          </Link>
          <Link to="/blog/">
            Blog
          </Link>
          <Link to="/work/">
            Work
          </Link>
          <Link to="/contact/">
            Contact
          </Link>
          <SwitchLanguage />
        </Nav>

      </Header>
    );
  }
}

export default Navbar;
