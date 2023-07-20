import React from 'react';
import styled from 'styled-components';

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  padding: 30px;
  height: 70vh;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const StatisticsData = styled.div`
  font-size: calc(20px + 2vmin);
  @media (max-width: 600px) {
    font-size: calc(16px + 1.5vmin);
  }
`;

const StatisticsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5em;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatisticsDetail = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(40px + 3vmin);
  background: linear-gradient(
    101.11deg,
    rgb(240, 135, 255, 1) 14.47%,
    rgb(240, 101, 206, 0.8) 39.43%,
    rgba(240, 81, 206, 0.6) 76.77%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 600px) {
    font-size: calc(20px + 2vmin);
    margin-bottom: 10px;
  }
`;

const StatisticsDetail2 = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(40px + 3vmin);

  background: linear-gradient(100.93deg, #1fcff1 15.61%, #234cb6 41.38%, rgba(35, 76, 182, 0.5) 79.94%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 600px) {
    font-size: calc(20px + 2vmin);
    margin-bottom: 10px;
  }
`;

const StatisticsDetail3 = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(40px + 3vmin);

  background: linear-gradient(97.65deg, #19fb9b 11.36%, #199890 54.3%, #005f59 100.78%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  @media (max-width: 600px) {
    font-size: calc(20px + 2vmin);
    margin-bottom: 10px;
  }
`;

const DetailDescription = styled.div`
  text-align: center;
  font-size: 14px;
  font-family: 'Dsemi', monospace;
  color: #c4c4c4;
`;

const StatisticContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainStatistics() {
  return (
    <StatisticsContainer>
      <StatisticsData>Join a community of millions.</StatisticsData>
      <StatisticsDetails>
        <StatisticContainer>
          <StatisticsDetail>11.5+</StatisticsDetail>
          <DetailDescription>ACTIVE ACCOUNTS</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail2>21.9m</StatisticsDetail2>
          <DetailDescription>NFTS MINTED</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail3>$0.025</StatisticsDetail3>
          <DetailDescription>AVERAGE COST PER TRANSACTION</DetailDescription>
        </StatisticContainer>
      </StatisticsDetails>
    </StatisticsContainer>
  );
}

export default MainStatistics;
