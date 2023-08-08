import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import {
  MenuList,
  Li,
  Button,
  Dropdown,
  HamburgerIcon,
  HamburgerOutIcon,
  HamburgerBtnWrapper,
} from './HamburgerBtn.style';
import { CloseIcon, MenuIcon } from 'assets';
import { theme } from 'style/theme';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useWeb3Modal, Web3NetworkSwitch } from '@web3modal/react';

const HamburgerBtn = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    learn: false,
    user: false,
    developer: false,
    community: false,
    contactUs: false,
  });

  const { open, close } = useWeb3Modal();

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const toggleSubMenu = (menuName: 'learn' | 'user' | 'developer' | 'community' | 'contactUs') => {
    setMenuState((prevState) => ({
      ...prevState,
      learn: menuName === 'learn' ? !prevState.learn : false,
      user: menuName === 'user' ? !prevState.user : false,
      developer: menuName === 'developer' ? !prevState.developer : false,
      community: menuName === 'community' ? !prevState.community : false,
      contactUs: menuName === 'contactUs' ? !prevState.contactUs : false,
    }));
  };

  const handleLinkClick = (message: string) => {
    alert(message);
  };

  const NetworkButton = styled.a``;

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
      <NetworkButton onClick={addNetwork} className="user">
        Add to Wallet
      </NetworkButton>
    );
  };

  const Eventpath = () => {
    window.open('https://open.kakao.com/o/gK0OM0zf', '_blank');
  };

  return (
    <HamburgerBtnWrapper>
      {isHamburgerOpen ? (
        <CloseIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      ) : (
        <MenuIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      )}
      <MenuList isopen={isHamburgerOpen ? 'true' : 'false'}>
        <Li>
          <Button onClick={() => open()}>Connect</Button>
        </Li>
        <Li>
          <Button isSelected={menuState.learn ? true : undefined} onClick={() => toggleSubMenu('learn')}>
            <Link className="learn" to="/learn">
              Learn
            </Link>
          </Button>
        </Li>
        <Li>
          <Button isSelected={menuState.user ? true : undefined} onClick={() => toggleSubMenu('user')}>
            User
            {menuState.user ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </Button>
          {menuState.user && (
            <Dropdown data-isvisible={menuState.user}>
              <div className="user-menu">
                <a
                  href="https://docs.worldland.foundation/user/wallet"
                  className="user"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect Worldland
                </a>
                <a href="https://docs.worldland.foundation/miner/start-mining" className="user">
                  Start Mining
                </a>
                <a href="https://docs.worldland.foundation/miner/install-and-run-geth" className="user">
                  Node Operator
                </a>
                <AddNetworkButton />
                <div className="user" onClick={() => handleLinkClick('서비스 준비중입니다.')}>
                  Bridge
                </div>
              </div>
              <div className="divider"></div>
              <div className="user-menu">
                <a href="http://scan.worldland.foundation/" className="user">
                  Scan
                </a>
                <div className="user" onClick={() => handleLinkClick('서비스 준비중입니다.')}>
                  Swap
                </div>
              </div>
            </Dropdown>
          )}
        </Li>
        <Li>
          <Button isSelected={menuState.developer ? true : undefined} onClick={() => toggleSubMenu('developer')}>
            Developer
            {menuState.developer ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </Button>
          {menuState.developer && (
            <Dropdown>
              <div className="user-menu">
                <a
                  href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-start-a-worldland-node."
                  className="user"
                >
                  Docs
                </a>
                <a href="https://github.com/cryptoecc" className="user">
                  GitHub
                </a>
              </div>
            </Dropdown>
          )}
        </Li>
        <Li>
          <Button isSelected={menuState.community ? true : undefined} onClick={() => toggleSubMenu('community')}>
            Community
            {menuState.community ? <BsChevronUp className="icon" /> : <BsChevronDown className="icon" />}
          </Button>
          {menuState.community && (
            <Dropdown>
              <div className="user-menu">
                <a href="https://dao.worldland.space/#/worldlandtest.eth" className="user">
                  DAO
                </a>
                <div className="user">Help Center</div>
                <div className="user">Twitter</div>
                <div className="user">Discord</div>
              </div>
            </Dropdown>
          )}
        </Li>
        <Li>
          <Button isSelected={menuState.contactUs ? true : undefined} onClick={() => Eventpath()}>
            Event
          </Button>
        </Li>
      </MenuList>
    </HamburgerBtnWrapper>
  );
};

export default HamburgerBtn;
