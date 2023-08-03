import React from 'react';

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
    <div style={{ color: 'red', backgroundColor: 'white' }}>
      <button onClick={addNetwork}>Connect to Worldland</button>
    </div>
  );
};

export default AddNetworkButton;
