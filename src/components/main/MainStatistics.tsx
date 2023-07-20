import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: black;
  color: white;
  padding: 30px;
  height: 70vh;

  background-color: black;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const StatisticsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5em;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatisticsDetail = styled.div`
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
      <StatisticsDetails>
        <StatisticContainer>
          <StatisticsDetail>
            <CountUp start={0} end={12} duration={3} /> sec
          </StatisticsDetail>
          <DetailDescription>Average Block Time</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail2>
            <CountUp start={0} end={2200000} duration={3} />
          </StatisticsDetail2>
          <DetailDescription>Total Transactions</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail3>
            <CountUp start={0} end={250000} duration={3} />
          </StatisticsDetail3>
          <DetailDescription>Total Blocks</DetailDescription>
        </StatisticContainer>
      </StatisticsDetails>
    </StatisticsContainer>
  );
}

export default MainStatistics;
