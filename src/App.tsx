import { theme } from 'style/theme';
import Router from './Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
