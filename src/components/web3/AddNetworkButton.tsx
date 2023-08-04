import React from 'react';
import styled from '@emotion/styled';
import { theme } from 'style/theme';

const NetworkButton = styled.button`
  padding: 6px 15px;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #f4f4f4;
  color: #f4f4f4;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: bold;
  text-decoration: none; /* Add this to remove underline */
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.white400};
    border: 1px solid ${theme.colors.white800};
    transition:
      background 0.3s,
      border 0.3s;
  }
`;

const AddNetworkButton = () => {
  const addNetwork = async () => {
    if (window.ethereum && window.ethereum.request) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x67', // Polygon의 체인 ID
              chainName: 'Seoul Mainnet',
              nativeCurrency: {
                name: 'WLC',
                symbol: 'WLC',
                decimals: 18,
              },
              rpcUrls: ['https://seoul.worldland.foundation/'],
            },
          ],
        });
        console.log('Successfully added Worldland network to MetaMask.');
      } catch (error) {
        console.error('Failed to add Worldland network to MetaMask:', error);
        // 사용자가 요청을 거부한 경우나, 다른 이유로 요청이 실패한 경우를 처리합니다.
      }
    } else {
      console.log('Metamask is not installed');
      // 메타마스크가 설치되어 있지 않은 경우를 처리합니다.
    }
  };

  return (
    <div>
      <NetworkButton onClick={addNetwork}>Connect Network</NetworkButton>
    </div>
  );
};

export default AddNetworkButton;
