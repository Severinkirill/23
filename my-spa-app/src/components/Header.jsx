import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './Themetoggle.jsx';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.headerText};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.headerText};
    text-decoration: none;
    &.active {
      font-weight: bold;
      text-decoration: underline;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;


const Header = () => (
  <HeaderContainer>
    <Nav>
      <NavLink to="/" end>Головна</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
      <NavLink to="/about">Про мене</NavLink>
    </Nav>
    <ThemeToggle />
  </HeaderContainer>
);

export default Header;