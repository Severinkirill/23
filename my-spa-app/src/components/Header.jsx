import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
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

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Link to="/">Головна</Link>
      <Link to="/contacts">Контакти</Link>
      <Link to="/about">Про мене</Link>
    </Nav>
    <ThemeToggle />
  </HeaderContainer>
);

export default Header;