import { hover } from '@testing-library/user-event/dist/hover';
import {
  Menu,
  Dropdown,
  MenuItem,
  CommunityDropdown,
  OutlineDown,
  OutlineUp,
  SpaceLink,
  Strong,
  Network,
  User,
  Divider,
  Learn,
  Contack,
  MenuItemWrapper,
} from './MainMenu.style';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Discord } from 'assets/header/Header';
// import { EVM } from 'assets/main/Main_core';

const MainMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleLinkClick = (message: string) => {
    alert(message);
  };

  return (
    <Menu>
      <MenuItemWrapper>
        <MenuItem data-isactive={activeMenu === 'Learn'} onClick={() => handleMenuClick('Learn')}>
          <Link to={'/learn'}>
            <Learn>Learn</Learn>
          </Link>
          {/* <Dropdown data-isvisible={activeMenu === 'Learn'}>
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
          </Dropdown> */}
        </MenuItem>
        <MenuItem
          isSelected={activeMenu === 'User' ? true : undefined}
          data-isactive={activeMenu === 'User'}
          onClick={() => handleMenuClick('User')}
        >
          User
          <Dropdown data-isvisible={activeMenu === 'User'}>
            <User>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                  <SpaceLink href="https://docs.worldland.foundation/miner/start-mining">
                    <Strong>Start Mining</Strong>
                  </SpaceLink>
                  <SpaceLink href="https://docs.worldland.foundation/miner/install-and-run-geth">
                    <Strong>Node operator</Strong>
                  </SpaceLink>
                </div>
              </div>
              <Divider></Divider>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <SpaceLink onClick={() => handleLinkClick('서비스 준비중입니다.')}>
                    <Strong>Bridge</Strong>
                  </SpaceLink>
                  <SpaceLink href="http://scan.worldland.foundation/" target="_blank">
                    <Strong>Scan</Strong>
                  </SpaceLink>
                  <SpaceLink href="/" onClick={() => handleLinkClick('서비스 준비중입니다. ')}>
                    <Strong>Swap</Strong>
                  </SpaceLink>
                </div>
              </div>
            </User>
          </Dropdown>
        </MenuItem>
        <MenuItem
          isSelected={activeMenu === 'Develop' ? true : undefined}
          data-isactive={activeMenu === 'Develop'}
          onClick={() => handleMenuClick('Develop')}
        >
          Developer
          <Dropdown data-isvisible={activeMenu === 'Develop'}>
            <Network>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <SpaceLink href="https://docs.worldland.foundation/">
                    <Strong>Docs</Strong>
                  </SpaceLink>
                  <SpaceLink href="https://github.com/cryptoecc/ECCPoW">
                    <Strong>GitHub</Strong>
                  </SpaceLink>
                </div>
              </div>
            </Network>
          </Dropdown>
        </MenuItem>
        <MenuItem
          isSelected={activeMenu === 'Community' ? true : undefined}
          data-isactive={activeMenu === 'Community'}
          onClick={() => handleMenuClick('Community')}
        >
          Community
          <CommunityDropdown className="community" data-isvisible={activeMenu === 'Community'}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <SpaceLink href="https://dao.worldland.space/#/worldlandtest.eth">
                <Strong>DAO</Strong>
              </SpaceLink>
              <SpaceLink>
                <Strong>Help Center</Strong>
              </SpaceLink>
              <SpaceLink href="/">
                <Strong>
                  <Twitter />
                  Twitter
                </Strong>
              </SpaceLink>
              <SpaceLink href="/">
                <Strong>
                  <Discord /> Discord
                </Strong>
              </SpaceLink>
            </div>
          </CommunityDropdown>
        </MenuItem>
      </MenuItemWrapper>
      <Contack data-isactive={activeMenu === 'Contact'} onClick={() => handleMenuClick('Contact')}>
        Contact Us
      </Contack>
    </Menu>
  );
};

export default MainMenu;
