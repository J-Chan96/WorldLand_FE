import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp, AiOutlineGlobal } from 'react-icons/ai';

const Header = styled.header`
  width: 100%;
  height: 65px;
  background: #333;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 10px; */
  background-color: rgb(18, 22, 30);
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px 2px,
    rgba(0, 0, 0, 0.3) 0px 1px 2px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  /* padding-top: 8px; */
`;

const Menu = styled.nav`
  display: flex;
  height: 25px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  margin: 0px 25px;
  position: relative;
  transition: color 0.3s ease-in-out;
  align-items: center;
  border-bottom: ${(props) => (props.isActive ? '2px solid #f9a109' : '2px solid transparent')};
  color: ${(props) => (props.isActive ? '#f9a109' : 'none')};

  &:hover {
    color: #f9a109;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  /* width: 100%; */
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.9);
  font-size: 1rem;
  color: #fff;
  top: calc(100% + 1rem);
  border-radius: 12px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    visibility 0.3s;
  transform: translateY(${(props) => (props.isVisible ? '0' : '-10px')});
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 25px;
  white-space: nowrap;
`;

const OutlineDown = styled(AiOutlineDown)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;

const OutlineUp = styled(AiOutlineUp)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;

const SpaceLink = styled.a`
  text-decoration: none;
  color: #848895;
  padding: 10px 50px 5px 10px;
  margin: 0.5rem -0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  transition:
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  line-height: 25px;
  &:hover {
    color: white;
    font-weight: bold;
    border-color: #848895;
  }
`;

const Strong = styled.div`
  color: white;
  font-weight: bold;
  /* padding-top: 2px; */
`;

function AppHeader() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <Header>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem isActive={activeMenu === 'Learn'} onClick={() => handleMenuClick('Learn')}>
          Learn {activeMenu === 'Learn' ? <OutlineUp /> : <OutlineDown />}
          <Dropdown isVisible={activeMenu === 'Learn'}>
            <div style={{ display: 'flex', margin: '20px 0' }}>
              <AiOutlineGlobal style={{ color: '#f9a109', paddingRight: '5px' }} /> HERE TO LEARN
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <SpaceLink href="https://www.worldland.space/">
                <Strong>BlockChain and WorldLand</Strong>
                <div>The basics on all things WorldLand and web3.</div>
              </SpaceLink>
              <SpaceLink href="https://www.worldland.space/Learn/">
                <Strong>Intro to WorldLand</Strong>
                <div>Introduction : What is WorldLand</div>
              </SpaceLink>
              <SpaceLink>
                <Strong>BlockChain and WorldLand</Strong>
                <div>The basics on all things WorldLand and web3.</div>
              </SpaceLink>
            </div>
          </Dropdown>
        </MenuItem>
        <MenuItem isActive={activeMenu === 'Build'} onClick={() => handleMenuClick('Build')}>
          Build {activeMenu === 'Build' ? <OutlineUp /> : <OutlineDown />}
          <Dropdown isVisible={activeMenu === 'Build'}>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem isActive={activeMenu === 'Network'} onClick={() => handleMenuClick('Network')}>
          Network {activeMenu === 'Network' ? <OutlineUp /> : <OutlineDown />}
          <Dropdown isVisible={activeMenu === 'Network'}>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem isActive={activeMenu === 'Community'} onClick={() => handleMenuClick('Community')}>
          Community {activeMenu === 'Community' ? <OutlineUp /> : <OutlineDown />}
          <Dropdown isVisible={activeMenu === 'Community'}>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
      </Menu>
    </Header>
  );
}

export default AppHeader;
