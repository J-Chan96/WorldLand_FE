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

const HamburgerBtn = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    learn: false,
    user: false,
    developer: false,
    community: false,
    contactUs: false,
  });

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

  return (
    <HamburgerBtnWrapper>
      {isHamburgerOpen ? (
        <CloseIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      ) : (
        <MenuIcon onClick={toggleHamburgerMenu} style={{ color: `${theme.colors.white}` }} />
      )}
      <MenuList isopen={isHamburgerOpen ? 'true' : 'false'}>
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
                <a href="https://docs.worldland.foundation/miner/start-mining" className="user">
                  Start Mining
                </a>
                <a href="https://docs.worldland.foundation/miner/install-and-run-geth" className="user">
                  Node Operator
                </a>
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
          <Button isSelected={menuState.contactUs ? true : undefined} onClick={() => toggleSubMenu('contactUs')}>
            Contact Us
          </Button>
        </Li>
      </MenuList>
    </HamburgerBtnWrapper>
  );
};

export default HamburgerBtn;
