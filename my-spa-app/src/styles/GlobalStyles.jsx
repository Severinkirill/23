import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;