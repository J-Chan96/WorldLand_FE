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

function MainStatistics() {
  const [time, setTime] = useState<number>(0);
  const [totalBlocks, setTotalBlocks] = useState<number>(0);
  const [activeNodes, setActiveNodes] = useState<number>(0);
  const statisticsRef = useRef<HTMLDivElement>(null);
  const prevActiveNodes = useRef<number>(0); // to keep track of previous activeNodes value

  const formatValue = (value: number) => {
    return `${value.toFixed(1)}s`;
  };

  const fetchBlockData = useCallback(async () => {
    try {
      // Total Blocks
      const latestBlockNumber = await web3.eth.getBlockNumber();
      setTotalBlocks(Number(latestBlockNumber));

      // Average Block Time
      const latestBlock = await web3.eth.getBlock(latestBlockNumber);
      const startBlock = await web3.eth.getBlock(Number(latestBlockNumber) - 1000);
      const averageTime = (Number(latestBlock.timestamp) - Number(startBlock.timestamp)) / 1000;

      // Update "time" state only if it's different from the current value
      if (time !== averageTime) {
        setTime(averageTime);
      }
    } catch (error) {
      console.log('Error fetching block data:', error);
    }
  }, [time]);

  useEffect(() => {
    const interval = setInterval(fetchBlockData, 1000);

    // Initial fetch
    fetchBlockData();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Fetch Active Accounts every 5 seconds
    const interval = setInterval(() => {
      web3.eth.net.getPeerCount().then((peerCount) => {
        // Update "activeNodes" state only if it's different from the current value
        if (activeNodes !== Number(peerCount)) {
          setActiveNodes(Number(peerCount));
        }
      });
    }, 30000);

    // Initial fetch
    web3.eth.net.getPeerCount().then((peerCount) => {
      // Update "activeNodes" state only if it's different from the current value
      if (activeNodes !== Number(peerCount)) {
        setActiveNodes(Number(peerCount));
      }
    });

    return () => clearInterval(interval);
  }, [activeNodes]); // Add "activeNodes" as a dependency to this useEffect

  useEffect(() => {
    // Check if the "activeNodes" value has changed
    if (prevActiveNodes.current !== activeNodes) {
      // Update the previous "activeNodes" value
      prevActiveNodes.current = activeNodes;
    } else {
      // Fetch "average block time" data only when "activeNodes" has not changed
      fetchBlockData();
    }
  }, [activeNodes, fetchBlockData]);

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
