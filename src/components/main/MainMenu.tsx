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
} from './MainMenu.style';
import React, { useState } from 'react';
import { Twitter, Discord } from 'assets/header/Header';

const MainMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  return (
    <Menu>
      <MenuItem data-isactive={activeMenu === 'Learn'} onClick={() => handleMenuClick('Learn')}>
        <Learn href="https://www.worldland.space/Learn/">Learn</Learn>
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
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-start-a-worldland-node./testing-eth-ecc">
                  <Strong>Start Mining</Strong>
                </SpaceLink>
                <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-start-a-worldland-node./install-and-run-geth">
                  <Strong>Node operator</Strong>
                </SpaceLink>
                <SpaceLink href="/">
                  <Strong>Bridge</Strong>
                </SpaceLink>
              </div>
            </div>
            <Divider></Divider>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <SpaceLink href="http://52.79.231.150/">
                  <Strong>Scan</Strong>
                </SpaceLink>
                <SpaceLink href="/">
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
                <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/use/how-to-connect-wallet-to-worldland-network">
                  <Strong>Docs</Strong>
                </SpaceLink>
                <SpaceLink href="https://ethworldland.gitbook.io/ethereum-worldland/participate/worldland-api/apis">
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
            <SpaceLink href="/">
              <Strong>Help Center</Strong>
            </SpaceLink>
            <SpaceLink href="/">
              <Strong>
                <Twitter />
                {'   '}Twitter
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
      <Contack data-isactive={activeMenu === 'Contact'} onClick={() => handleMenuClick('Contact')}>
        Contack Us
      </Contack>
    </Menu>
  );
};

export default MainMenu;
