import React, { useState } from 'react';
import styled from 'styled-components';
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineGlobal,
  AiOutlineFolderOpen,
  AiOutlineFileSearch,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineClose,
  AiOutlineMenu,
} from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';

interface MenuProps {
  isHamburgerOpen: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  height: 65px;
  background: #12161f;
  /* messari header color : #12161f */
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: rgb(18, 22, 30);
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px 2px,
    rgba(0, 0, 0, 0.3) 0px 1px 2px;
  user-select: none;
  @media (max-width: 768px) {
    flex-direction: row;
    position: fixed;
    width: 100vw;
    justify-content: start;
    padding-left: 40px;
  }
`;

const Logo = styled.div`
  @media (min-width: 768px) {
    /* justify-content: left; */
    /* margin-left: 50px; */
  }
`;

const Menu = styled.nav<MenuProps>`
  display: flex;
  height: 25px;
  align-items: center;

  @media (max-width: 768px) {
    display: ${(props) => (props.isHamburgerOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #12161f;
    z-index: 999;
  }
`;

const MenuItem = styled.div`
  margin: 0px 25px;
  position: relative;
  transition: color 0.3s ease-in-out;
  align-items: center;
  border-bottom: ${(props: any) => (props['data-isactive'] ? '2px solid #f9a109' : '2px solid transparent')};
  color: ${(props: any) => (props['data-isactive'] ? '#f9a109' : 'none')};

  &:hover {
    color: #f9a109;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  display: block;
  position: absolute;
  background-color: rgb(18, 22, 30);
  font-size: 1rem;
  color: #fff;
  top: calc(100% + 1rem);
  border-radius: 12px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    visibility 0.3s;
  transform: translateY(${(props: any) => (props['data-isvisible'] ? '0' : '-10px')});
  opacity: ${(props: any) => (props['data-isvisible'] ? '1' : '0')};
  visibility: ${(props: any) => (props['data-isvisible'] ? 'visible' : 'hidden')};
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 25px;
  white-space: nowrap;
  backdrop-filter: blur(10px);
`;

const CommunityDropdown = styled(Dropdown)`
  left: -250px;
  /* overflow-x: hidden; */
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

const Network = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease;
`;

const Divider = styled.div`
  width: 1px;
  height: auto;
  color: red;
  /* margin: -1rem, 2.5rem; */
  /* margin-right: -20px; */
  margin-left: 18px;
  margin-right: 20px;
  background: hsla(0, 0%, 100%, 0.1);
`;

const HamburgerIcon = styled(BiMenu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 70px;
    z-index: 3;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }
`;

const HamburgerOutIcon = styled(AiOutlineClose)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 70px;
    z-index: 3;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }
`;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const handleMenuClick = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <Container>
      <StyledHeader>
        <Logo>Logo</Logo>
        <Menu isHamburgerOpen={isHamburgerOpen}>
          <MenuItem data-isactive={activeMenu === 'Learn'} onClick={() => handleMenuClick('Learn')}>
            Learn {activeMenu === 'Learn' ? <OutlineUp /> : <OutlineDown />}
            <Dropdown data-isvisible={activeMenu === 'Learn'}>
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
              </div>
            </Dropdown>
          </MenuItem>
          <MenuItem data-isactive={activeMenu === 'Build'} onClick={() => handleMenuClick('Build')}>
            Build {activeMenu === 'Build' ? <OutlineUp /> : <OutlineDown />}
            <Dropdown data-isvisible={activeMenu === 'Build'}>
              <div style={{ display: 'flex', margin: '20px 0' }}>
                <AiOutlineSetting style={{ color: '#f9a109', paddingRight: '5px' }} /> DEVELOPER
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SpaceLink href="https://www.worldland.space/Learn/">
                  <Strong>WorldLand Documentatation</Strong>
                  <div>Official WorldLand and WLC docs.</div>
                </SpaceLink>
                <SpaceLink href="https://www.worldland.space/">
                  <Strong>Participate WorldLand</Strong>
                  <div>How to participate in WorldLand</div>
                </SpaceLink>
                <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-deploy-smart-contract">
                  <Strong>Deploy Smart Contract</Strong>
                  <div>Here the section deploy tools</div>
                </SpaceLink>
              </div>
            </Dropdown>
          </MenuItem>
          <MenuItem data-isactive={activeMenu === 'Network'} onClick={() => handleMenuClick('Network')}>
            Network {activeMenu === 'Network' ? <OutlineUp /> : <OutlineDown />}
            <Dropdown data-isvisible={activeMenu === 'Network'} style={{ left: '-500%' }}>
              <Network>
                <div>
                  <div style={{ display: 'flex', margin: '20px 0' }}>
                    <AiOutlineFolderOpen style={{ color: '#f9a109', paddingRight: '5px' }} />
                    RESOURCES
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/use/how-to-connect-wallet-to-worldland-network">
                      <Strong>Connect WorldLand Network</Strong>
                      <div>How to connec wallet to WorldLand Network</div>
                    </SpaceLink>
                    <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/participate/worldland-api/apis">
                      <Strong>WorldLand API</Strong>
                      <div>Kind of WorldLand APIs</div>
                    </SpaceLink>
                  </div>
                </div>
                <Divider></Divider>
                <div>
                  <div style={{ display: 'flex', margin: '20px 0' }}>
                    <AiOutlineFileSearch style={{ color: '#f9a109', paddingRight: '5px' }} />
                    INSPECT
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <SpaceLink href="http://explorer.worldland.space">
                      <Strong>WorldLand Explorer</Strong>
                      <div>Explorer WorldLand Scan in real time.</div>
                    </SpaceLink>
                  </div>
                </div>
              </Network>
            </Dropdown>
          </MenuItem>
          <MenuItem data-isactive={activeMenu === 'Community'} onClick={() => handleMenuClick('Community')}>
            Community {activeMenu === 'Community' ? <OutlineUp /> : <OutlineDown />}
            <CommunityDropdown className="community" data-isvisible={activeMenu === 'Community'}>
              <div style={{ display: 'flex', margin: '20px 0' }}>
                <AiOutlineTeam style={{ color: '#f9a109', paddingRight: '5px' }} /> GET INVOLVED
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SpaceLink href="https://www.worldland.space/">
                  <Strong>BlockChain and WorldLand</Strong>
                  <div>The basics on all things WorldLand and web3.</div>
                </SpaceLink>
                <SpaceLink href="https://github.com/cryptoecc">
                  <Strong>Visit our Github</Strong>
                  <div>Visit our DeScure Blockchain</div>
                </SpaceLink>
              </div>
            </CommunityDropdown>
          </MenuItem>
        </Menu>
        {isHamburgerOpen ? (
          <HamburgerOutIcon onClick={toggleHamburgerMenu} />
        ) : (
          <HamburgerIcon onClick={toggleHamburgerMenu} />
        )}
      </StyledHeader>
    </Container>
  );
};

export default Header;
