import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { MenuList, Li, Button, Dropdown, HamburgerIcon, HamburgerOutIcon } from './HamburgerBtn.style';
import { MenuIcon } from 'assets';
import { CloseIcon } from 'assets/header/CloseIcon';
import { theme } from 'style/theme';

const HamburgerBtn = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    learn: false,
    user: false,
    developer: false,
    community: false,
  });

  const toggleHamburgerMenu = () => {
    setHamburgerOpen(!isHamburgerOpen);
  };

  const toggleSubMenu = (menuName: 'learn' | 'user' | 'developer' | 'community') => {
    setMenuState((prevState) => ({
      ...prevState,
      learn: menuName === 'learn' ? !prevState.learn : false,
      user: menuName === 'user' ? !prevState.user : false,
      developer: menuName === 'developer' ? !prevState.developer : false,
      community: menuName === 'community' ? !prevState.community : false,
    }));
  };

  return (
    <div>
      {isHamburgerOpen ? (
        <CloseIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      ) : (
        <MenuIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      )}
      <MenuList isopen={isHamburgerOpen ? 'true' : 'false'}>
        <Li>
          <Button isSelected={menuState.learn ? true : undefined} onClick={() => toggleSubMenu('learn')}>
            <a href="https://www.worldland.space/Learn/" className="learn">
              Learn
            </a>
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
                  href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-start-a-worldland-node./testing-eth-ecc"
                  className="user"
                >
                  Start Mining
                </a>
                <a
                  href="https://ethworldland.gitbook.io/ethereum-worldland/participate/how-to-start-a-worldland-node./install-and-run-geth"
                  className="user"
                >
                  Node Operator
                </a>
                <div className="user">Bridge</div>
              </div>
              <div className="divider"></div>
              <div className="user-menu">
                <a href="http://52.79.231.150/" className="user">
                  Scan
                </a>
                <div className="user">Swap</div>
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
      </MenuList>
    </div>
  );
};

export default HamburgerBtn;
