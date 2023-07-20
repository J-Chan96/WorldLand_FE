import React from 'react';
import styled from 'styled-components';

const MainStudyContainer = styled.div`
  display: flex;
  width: auto;
  padding: 120px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: darkblue;

  color: white;
  height: 50vh;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const MainStudy = () => {
  return <MainStudyContainer>Study?</MainStudyContainer>;
};

export default MainStudy;
