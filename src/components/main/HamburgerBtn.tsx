import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import styled from 'styled-components';

interface MenuListProps {
  isopen: string;
}

const MenuList = styled.ul<MenuListProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isopen === 'true' ? 'block' : 'none')};
    font-size: 1.1rem;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 45px;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #12161f;
    z-index: 2;
    list-style: none;
    /* 나머지 스타일링 */
  }
`;

const Li = styled.li`
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  font-size: 1.1rem;
`;

const Button = styled.button<{ isSelected?: boolean }>`
  // Button 스타일
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => (props.isSelected ? 'white' : '#848895')};
  background: none;
  padding: 1.3rem 0;
  border: none;
  font-weight: 800;
  font-size: 15px;
  transition: color 0.3s ease-in-out;

  .icon {
    margin-right: 70px;
    font-size: 15px;
    font-weight: bold;
    /* white-space: nowrap; */
  }

  .learn {
    text-decoration: none;
    color: #848895;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: white;
    }
  }

  &:hover {
    color: white;
  }
`;

const Dropdown = styled.div`
  background: black;
  padding: 25px 25px 15px 25px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 12px;
  margin-right: 70px;
  .user-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .user-menu .user {
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition:
      background-color 0.3s ease-in-out,
      border-color 0.3s ease-in-out;
    text-decoration: none;
    color: white;
    &:hover {
      background-color: #1e1e1e;
    }
  }

  .divider {
    background: hsla(0, 0%, 100%, 0.1);
    height: 2px;
    margin: 2.5rem --1.625rem;
    margin-bottom: 15px;
  }
`;

// const UserDropdown = styled.div`
//   background: black;
//   padding: 25px;
//   border: 1px solid hsla(0, 0%, 100%, 0.1);
//   border-radius: 12px;
//   margin-right: 70px;
// `;

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
        <HamburgerOutIcon onClick={toggleHamburgerMenu} />
      ) : (
        <HamburgerIcon onClick={toggleHamburgerMenu} />
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
