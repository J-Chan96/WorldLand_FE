import React, { useEffect } from 'react';
import AppLayout from './components/layout/AppLayout';
import styled, { createGlobalStyle } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'WLFont';
    src: url('/public/fonts/Montserrat-Regular.ttf') format('truetype');
  }

  body {
    font-family: 'WLFont', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <AppLayout />
      </Container>
    </>
  );
}

export default App;
