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
  Divider,
} from './MainMenu.style';
import React, { useState } from 'react';
import {
  AiOutlineGlobal,
  AiOutlineFolderOpen,
  AiOutlineFileSearch,
  AiOutlineSetting,
  AiOutlineTeam,
} from 'react-icons/ai';

const MainMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu: any) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };
  return (
    <Menu>
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
                <SpaceLink href="http://52.79.231.150/">
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
  );
};

export default MainMenu;
