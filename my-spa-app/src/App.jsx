import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ContactsPage from './pages/ContactsPage';
import AboutPage from './pages/About';
import NotFoundPage from './pages/404ErrorPage';
import { theme } from './styles/themeContent';
import GlobalStyles from './styles/GlobalStyles';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;


function Fallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Щось пішло не так:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Скинути</button>
    </div>
  );
}



const App = ({ currentTheme = 'light' }) => {
  return (
    <BrowserRouter>
      <StyledThemeProvider theme={theme[currentTheme]}>
        <GlobalStyles />
        <Header />
        <AppContainer>
          <ErrorBoundary FallbackComponent={Fallback}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </AppContainer>
      </StyledThemeProvider>
    </BrowserRouter>
  );
};

export default App;
