import React, { useState, useRef, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';
import { web3 } from '../web3/useWeb3';

import {
  StatisticsContainer,
  StatisticsDetails,
  StatisticsDetail,
  StatisticsDetail2,
  StatisticsDetail3,
  DetailDescription,
  StatisticContainer,
} from './MainStatistics.style';

interface Block {
  transactions: any;
  timestamp: number;
}

function MainStatistics() {
  const [blockTime, setBlockTime] = useState<number>(0);
  const [blockHeight, setBlockHeight] = useState<number>(0);
  const [time, setTime] = useState<number>(54.2);
  const [activeNodes, setActiveNodes] = useState<number>(14);
  const [totalBlocks, setTotalBlocks] = useState<number>(0);
  const [animationPlayed, setAnimationPlayed] = useState<boolean>(false);
  const statisticsRef = useRef<HTMLDivElement>(null);
  const formatValue = (value: number) => {
    return `${value.toFixed(1)}s`;
  };
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

          setTotalBlocks(Number(latestBlockNumber));

          // Active Accounts
          web3.eth.net.getPeerCount().then((peerCount) => {
            // console.log(`연결된 노드 수: ${peerCount}`);
            setActiveNodes(Number(peerCount));
          });

          // Average Block Time
          const blockHeight = await web3.eth.getBlockNumber();
          const blockHeightNumber = Number(blockHeight);
          setBlockHeight(Number(blockHeight));

          const startBlock = await web3.eth.getBlock(blockHeightNumber);
          const endBlock = await web3.eth.getBlock(blockHeightNumber - 1000);
          const averageTime = (Number(startBlock.timestamp) - Number(endBlock.timestamp)) / 1000;
          setTime(averageTime);
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
        } catch (error) {
          console.log('Error fetching block number:', error);
        }
      })();
    }
  }, [animationPlayed, blockTime, time, activeNodes]);

  return (
    <StatisticsContainer ref={statisticsRef}>
      <StatisticsDetails>
        <StatisticContainer>
          <StatisticsDetail>
            <CountUp end={time} duration={0.5} decimals={1} formattingFn={formatValue} />
          </StatisticsDetail>
          <DetailDescription>Average Block Time</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail3>
            <CountUp end={totalBlocks} duration={0.5} />
          </StatisticsDetail3>
          <DetailDescription>Total Blocks</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail2>
            <CountUp end={activeNodes} duration={0.5} />
          </StatisticsDetail2>
          <DetailDescription>Active Accounts</DetailDescription>
        </StatisticContainer>
      </StatisticsDetails>
    </StatisticsContainer>
  );
}

export default MainStatistics;
