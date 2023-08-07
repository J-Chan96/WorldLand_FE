import React, { useEffect, useState } from 'react';
import { useWeb3Modal, Web3NetworkSwitch } from '@web3modal/react';
import styled from 'styled-components';
import { theme } from 'style/theme';
import Web3 from 'web3';
import { useAccount } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { connect } from '@wagmi/core';

interface Web3ConnectButtonProps {
  onAccountConnected: (account: string) => void;
}

const StyledButton = styled.button`
  display: flex;
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

const TruncatedTextButton = styled(StyledButton)`
  span {
    max-width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MobileButton = styled.button`
  display: flex;
  padding: 6px 15px;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #f4f4f4;
  color: #f4f4f4;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: bold;
  text-decoration: none; /* Add this to remove underline */
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: ${theme.colors.white400};
    border: 1px solid ${theme.colors.white800};
    transition:
      background 0.3s,
      border 0.3s;
  }
`;

// window.open(`https://metamask.app.link/dapp/${window.location.host}`)
const Web3ConnectButton: React.FC<Web3ConnectButtonProps> = ({ onAccountConnected }) => {
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [showButton, setShowButton] = useState('true');
  const { address, isConnected } = useAccount();

  const { open, close } = useWeb3Modal();
  const userAgent = window.navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  // const getAccounts = async () => {
  //   // const accounts = await web3.eth.getAccounts();
  //   // setConnectedAccount(accounts[0]);
  //   useAccount();
  // };

  const handleOpenMetamaskLink = () => {
    // window.open(`https://metamask.app.link/dapp/${window.location.host}`);
    if (isMobile && showButton === 'true') {
      setShowButton('false');
      let newWindow = window.open(`dapp://${window.location.host}`, showButton);
      newWindow!.myData = { message: showButton };
    }
  };

  // const handleConnect = async () => {
  //   if (!isOpen) {
  //     await open();
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     console.log(accounts);

  //     await getAccounts();
  //     localStorage.setItem('connectedAccount', connectedAccount || '');
  //   } else {
  //     // 이미 연결된 계정 정보가 있을 경우 로그아웃 처리
  //     // localStorage.removeItem('connectedAccount');
  //     // setConnectedAccount(null); // 상태 초기화
  //     // onAccountConnected(''); // 타입 단언을 사용하여 빈 문자열로 변환
  //   }
  // };

  useEffect(() => {
    // 계정 정보가 변경될 때마다 로컬 스토리지에 저장
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts: string[]) {
        localStorage.setItem('connectedAccount', accounts[0]);
        setConnectedAccount(accounts[0]);
      });
    }
  }, [connectedAccount]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 계정 정보 불러오기
    const storedAccount = localStorage.getItem('connectedAccount');
    if (storedAccount) {
      setConnectedAccount(storedAccount);
    }
  }, []);

  useEffect(() => {
    // Connect 유무에 따른 버튼 visible
    const wagmiConnect = localStorage.getItem('wagmi.connected');
    if (wagmiConnect) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
      localStorage.setItem('connectedAccount', '');
    }
  }, [localStorage.getItem('wagmi.connected')]);

  return (
    <div>
      {isMobile && showButton === 'true' ? (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <MobileButton onClick={handleOpenMetamaskLink}>Metamask</MobileButton>
          {/* <MobileButton onClick={() => open()}>Connect</MobileButton> */}
        </div>
      ) : isConnected ? (
        <TruncatedTextButton onClick={() => open()}>
          <span>{address}</span>
        </TruncatedTextButton>
      ) : (
        <StyledButton onClick={() => open()}>Connect</StyledButton>
      )}
    </div>
  );
};

export default Web3ConnectButton;
