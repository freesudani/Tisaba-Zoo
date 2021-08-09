import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../images/3d1191f8fb9d40a6be696b185512e83b.png";

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: #fff;
  padding-left: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: italic;
  margin-top: 3rem;

  img {
    width: 7rem;
  }
`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">
        <img src={LogoImage} />
      </Logo>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/about">About</NavbarLink>
        <NavbarLink to="/services">Services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default Header;
