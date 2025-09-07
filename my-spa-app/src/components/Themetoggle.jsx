
import React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../styles/themeContent';

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  border: 1px solid ${({ theme }) => theme.buttonBorder};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg};
  }
`;


const ThemeToggle = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  return (
    <ToggleButton onClick={toggleTheme}>
      Перемкнути тему
    </ToggleButton>
  );
};

export default ThemeToggle;