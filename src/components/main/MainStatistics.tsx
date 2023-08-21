import React, { useState, useRef, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';
import { web3 } from '../web3/useWeb3';

import {
  StatisticsContainer,
  StatisticsDetails,
  StatisticsDetail,
  DetailDescription,
  StatisticContainer,
} from './MainStatistics.style';

function MainStatistics() {
  const [time, setTime] = useState<number>(0);
  const [totalBlocks, setTotalBlocks] = useState<number>(0);
  const [totalWalletCount, setTotalWalletCount] = useState<number>(0);
  const statisticsRef = useRef<HTMLDivElement>(null);

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
      const startBlock = await web3.eth.getBlock(Number(latestBlockNumber) - 100000);
      const averageTime = (Number(latestBlock.timestamp) - Number(startBlock.timestamp)) / 100000;

      try {
        const accounts = await web3.eth.getAccounts();
        setTotalWalletCount(125);
      } catch (error) {
        console.error('Error fetching wallet count:', error);
      }
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
  }, [fetchBlockData]);

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
          <StatisticsDetail>
            <CountUp end={totalBlocks} duration={0.5} />
          </StatisticsDetail>
          <DetailDescription>Block Numbers</DetailDescription>
        </StatisticContainer>
        <StatisticContainer>
          <StatisticsDetail>
            <CountUp end={totalWalletCount} duration={0.5} />
          </StatisticsDetail>
          <DetailDescription>Total Wallet Count</DetailDescription>
        </StatisticContainer>
      </StatisticsDetails>
    </StatisticsContainer>
  );
}

export default MainStatistics;
