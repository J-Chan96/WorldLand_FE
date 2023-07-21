import React, { useState, useRef, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';
// import styled from 'styled-components';
import { web3 } from '../web3/useWeb3';

import {
  StatisticsContainer,
  StatisticsDetails,
  StatisticsDetail,
  StatisticsDetail2,
  StatisticsDetail3,
  DetailDescription,
  StatisticContainer,
} from '../main/MainDashboard.style';

// const StatisticsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   background-color: black;
//   color: white;
//   padding: 30px;
//   height: 70vh;

//   background-color: black;
//   overflow: hidden;

//   @media (max-width: 600px) {
//     padding: 20px;
//   }
// `;

// const StatisticsDetails = styled.div`
//   display: flex;
//   justify-content: space-between;
//   font-size: 1.5em;

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const StatisticsDetail = styled.div`
//   text-align: center;
//   font-size: calc(40px + 3vmin);
//   background: linear-gradient(
//     101.11deg,
//     rgb(240, 135, 255, 1) 14.47%,
//     rgb(240, 101, 206, 0.8) 39.43%,
//     rgba(240, 81, 206, 0.6) 76.77%
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;

//   @media (max-width: 600px) {
//     font-size: calc(20px + 2vmin);
//     margin-bottom: 10px;
//   }
// `;

// const StatisticsDetail2 = styled.div`
//   text-align: center;
//   font-size: calc(40px + 3vmin);

//   background: linear-gradient(100.93deg, #1fcff1 15.61%, #234cb6 41.38%, rgba(35, 76, 182, 0.5) 79.94%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;

//   @media (max-width: 600px) {
//     font-size: calc(20px + 2vmin);
//     margin-bottom: 10px;
//   }
// `;

// const StatisticsDetail3 = styled.div`
//   text-align: center;
//   font-size: calc(40px + 3vmin);

//   background: linear-gradient(97.65deg, #19fb9b 11.36%, #199890 54.3%, #005f59 100.78%);
//   -webkit-background-clip: text;
//   background-clip: text;
//   -webkit-text-fill-color: transparent;
//   color: transparent;

//   @media (max-width: 600px) {
//     font-size: calc(20px + 2vmin);
//     margin-bottom: 10px;
//   }
// `;

// const DetailDescription = styled.div`
//   text-align: center;
//   font-size: 14px;
//   font-family: 'Dsemi', monospace;
//   color: #c4c4c4;
// `;

// const StatisticContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

interface Block {
  transactions: any;
  timestamp: number;
}

function MainStatistics() {
  const [blockTime, setBlockTime] = useState<number>(12);
  const [blockHeight, setBlockHeight] = useState<number>(blockTime);
  const [time, setTime] = useState<number>(blockTime);
  const [totalTransactions, setTotalTransactions] = useState<number>(0);
  const [totalBlocks, setTotalBlocks] = useState<number>(0);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
  const statisticsRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting && !animationPlayed) {
          try {
            const blockNumber = await web3.eth.getBlockNumber();
            setTotalBlocks(Number(blockNumber));
            setAnimationPlayed(true);
          } catch (error) {
            console.log('Error fetching block number:', error);
          }
        }
      });
    },
    [animationPlayed],
  );

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (statisticsRef.current) {
      observer.observe(statisticsRef.current);
    }

    return () => {
      if (statisticsRef.current) {
        observer.unobserve(statisticsRef.current);
      }
    };
  }, [handleIntersection]);

  useEffect(() => {
    if (animationPlayed) {
      const interval = setInterval(async () => {
        try {
          // Total Blocks
          const latestBlockNumber = await web3.eth.getBlockNumber();
          const startBlockNumber = Number(latestBlockNumber) - 99;

          const blocks: Block[] = [];

          for (let i = startBlockNumber; i <= latestBlockNumber; i++) {
            const block = await web3.eth.getBlock(i);
            const blockWithTimestamp: Block = {
              ...block,
              timestamp: Number(block.timestamp),
            };
            blocks.push(blockWithTimestamp);
          }

          const blockTimes = blocks.map((block) => block.timestamp);
          const averageBlockTime = calculateAverageBlockTime(blockTimes);
          setBlockTime(averageBlockTime);
          setTotalBlocks(Number(latestBlockNumber));

          // Average Block Time
          const blockHeight = await web3.eth.getBlockNumber();
          const blockHeightNumber = Number(blockHeight);
          setBlockHeight(Number(blockHeight));

          const startBlock = await web3.eth.getBlock(blockHeightNumber);
          const endBlock = await web3.eth.getBlock(blockHeightNumber - 2000);
          const averageTime = (Number(startBlock.timestamp) - Number(endBlock.timestamp)) / 2000;
          setTime(averageTime);
          console.log(time, '@@ time value');

          // Additional code to calculate total transactions
          let totalTx = 0;
          for (const block of blocks) {
            totalTx += block?.transactions?.length;
          }
          setTotalTransactions(totalTx);
        } catch (error) {
          console.log('Error fetching block number:', error);
        }
      }, 1000);

      return () => clearInterval(interval);
    } else {
      (async () => {
        try {
          const latestBlockNumber = await web3.eth.getBlockNumber();
          const block = await web3.eth.getBlock(latestBlockNumber);
          setBlockTime(Number(block.timestamp));
          setTotalBlocks(Number(latestBlockNumber));

          // Additional code to calculate total transactions for the latest block
          setTotalTransactions(block?.transactions?.length);
        } catch (error) {
          console.log('Error fetching block number:', error);
        }
      })();
    }
  }, [animationPlayed, blockTime]);

  const calculateAverageBlockTime = (blockTimes: number[]): number => {
    if (blockTimes.length === 0) {
      return 0;
    }

    const totalBlockTime = blockTimes.reduce((accumulator, blockTime) => accumulator + blockTime, 0);
    const averageBlockTime = totalBlockTime / blockTimes.length;
    return averageBlockTime;
  };

  return (
    <StatisticsContainer ref={statisticsRef}>
      <StatisticsDetails>
        <StatisticContainer>
          <StatisticsDetail>
            <CountUp end={time} duration={0.5} />
          </StatisticsDetail>
          <DetailDescription>Average Block Time</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail2>
            <CountUp end={totalTransactions} duration={5} />
          </StatisticsDetail2>
          <DetailDescription>Total Transactions</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail3>
            <CountUp end={totalBlocks} duration={0.5} />
          </StatisticsDetail3>
          <DetailDescription>Total Blocks</DetailDescription>
        </StatisticContainer>
      </StatisticsDetails>
    </StatisticsContainer>
  );
}

export default MainStatistics;
