import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="navbar-brand"/> */}

          {/* <i class="fa fa-shopping-cart fa-3x" aria-hidden="true"></i> */}

          <span className="fa-stack">
            <i className="fa fa-shopping-cart fa-stack-3x"></i>
            <span className="fa fa-stack-2x">sh</span>
          </span>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
          </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus">My Cart</i>
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>

    )
  }
}

const NavWrapper = styled.nav`
 background:var(--mainBlue);
 .nav-link{
   color:var(--mainWhite) !important;
   font-size:1.3rem !important;
   text-transform:capitalize;
 }

 `;