import React, { useEffect } from 'react';
import AppLayout from './components/layout/AppLayout';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

function App() {
  return (
    <Container>
      <AppLayout />
    </Container>
  );
}

export default App;
