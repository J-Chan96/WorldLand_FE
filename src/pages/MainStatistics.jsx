// import React from 'react';
// import styled from 'styled-components';

// const StatisticsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: black;
//   color: white;
//   padding: 30px;
// `;

// const StatisticsData = styled.div`
//   font-size: calc(20px + 2vmin);
//   margin-bottom: 20px;
// `;

// const StatisticsDetails = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   font-size: 1.5em;
// `;

// const StatisticsDetail = styled.div`
//   flex: 1;
//   text-align: center;
//   font-size: calc(60px + 5vmin);
//   background: linear-gradient(
//     101.11deg,
//     rgb(240, 135, 255) 14.47%,
//     rgb(110, 31, 206) 39.43%,
//     rgba(110, 31, 206, 0.1) 76.77%
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// const StatisticsDetail3 = styled.div`
//   flex: 1;
//   text-align: center;
//   font-size: calc(60px + 5vmin);

//   background: linear-gradient(97.65deg, #19fb9b 11.36%, #199890 54.3%, #005f59 100.78%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// const StatisticsDetail2 = styled.div`
//   flex: 1;
//   text-align: center;
//   font-size: calc(60px + 5vmin);

//   background: linear-gradient(100.93deg, #1fcff1 15.61%, #234cb6 41.38%, rgba(35, 76, 182, 0.1) 79.94%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;
// `;

// const DetailDescription = styled.div`
//   font-size: 14px;
//   font-family: 'Dsemi', monospace;
//   color: #c4c4c4;
//   background: rgba(255, 255, 255, 0.01); // Nearly transparent white background
//   padding: 2px;
// `;

// function MainStatistics() {
//   return (
//     <StatisticsContainer>
//       <StatisticsData>Join a community of millions.</StatisticsData>
//       <StatisticsDetails>
//         <StatisticsDetail>
//           11.5+
//           <DetailDescription>ACTIVE ACCOUNTS</DetailDescription>
//         </StatisticsDetail>
//         <StatisticsDetail2>
//           21.9m
//           <DetailDescription>NFTS MINTED</DetailDescription>
//         </StatisticsDetail2>
//         <StatisticsDetail3>
//           $0.00025
//           <DetailDescription>AVERAGE COST PER TRANSACTION</DetailDescription>
//         </StatisticsDetail3>
//       </StatisticsDetails>
//     </StatisticsContainer>
//   );
// }

// export default MainStatistics;

import React from 'react';
import styled from 'styled-components';

// Other styles...

const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 30px;
`;

const StatisticsData = styled.div`
  font-size: calc(20px + 2vmin);
  margin-bottom: 20px;
`;

const StatisticsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.5em;
`;

const StatisticsDetail = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(60px + 5vmin);
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
`;

const StatisticsDetail2 = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(60px + 5vmin);

  background: linear-gradient(100.93deg, #1fcff1 15.61%, #234cb6 41.38%, rgba(35, 76, 182, 0.1) 79.94%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

const StatisticsDetail3 = styled.div`
  flex: 1;
  text-align: center;
  font-size: calc(60px + 5vmin);

  background: linear-gradient(97.65deg, #19fb9b 11.36%, #199890 54.3%, #005f59 100.78%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
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

const MainStatistics = () => {
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
        {/* Other StatisticContainer components... */}
      </StatisticsDetails>
    </StatisticsContainer>
  );
};

export default MainStatistics;