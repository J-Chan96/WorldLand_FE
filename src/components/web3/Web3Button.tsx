import React, { useEffect, useState } from 'react';
import { useWeb3Modal } from '@web3modal/react';
import styled from 'styled-components';
import { theme } from 'style/theme';

interface Web3ConnectButtonProps {
  onAccountConnected: (account: string) => void;
}

const StyledButton = styled.button`
  display: flex;
  padding: 6px 18px;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #f4f4f4;
  color: #f4f4f4;
  font-family: 'Inter';
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
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
// window.open(`https://metamask.app.link/dapp/${window.location.host}`)
const Web3ConnectButton: React.FC<Web3ConnectButtonProps> = ({ onAccountConnected }) => {
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  const { isOpen, open } = useWeb3Modal();

  const handleOpenMetamaskLink = () => {
    const userAgent = window.navigator.userAgent;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    // window.open(`https://metamask.app.link/dapp/${window.location.host}`);

    if (isMobile) {
      window.open(`dapp://${window.location.host}`);
    } else {
      return;
    }
  };

  const handleConnect = async () => {
    if (!isOpen) {
      await open();
    } else {
      // 이미 연결된 계정 정보가 있을 경우 로그아웃 처리
      localStorage.removeItem('connectedAccount');
      setConnectedAccount(null); // 상태 초기화
      onAccountConnected(''); // 타입 단언을 사용하여 빈 문자열로 변환
    }
  };

  useEffect(() => {
    // 계정 정보가 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('connectedAccount', connectedAccount || '');
  }, [connectedAccount]);

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 계정 정보 불러오기
    const storedAccount = localStorage.getItem('connectedAccount');

    if (storedAccount) {
      setConnectedAccount(storedAccount);
    }
  }, []);

  return (
    <div>
      {connectedAccount ? (
        <p>Connected Account: {connectedAccount}</p>
      ) : (
        <StyledButton onClick={handleConnect}>
          <a href="#" onClick={handleOpenMetamaskLink} style={{ textDecoration: 'none', color: 'inherit' }}>
            Connect
          </a>
        </StyledButton>
      )}
    </div>
  );
};

export default Web3ConnectButton;
