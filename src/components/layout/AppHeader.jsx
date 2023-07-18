import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  background: #333;
  color: #fff;
  display: flex;
  /* justify-content: space-around; */
  padding: 20px;
  background-color: rgb(18, 22, 30);
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px 2px,
    rgba(0, 0, 0, 0.3) 0px 1px 2px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.div`
  padding-top: 8px;
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled.div`
  margin: 0 10px;
  position: relative;
  transition: color 0.3s ease-in-out;
  padding: 10px 0;

  &:hover {
    color: #f9a109;
    cursor: pointer;
  }

  &:hover div {
    display: block;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background: #fff;
  color: #333;
  padding: 10px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
  transform: translateY(-10px);
  opacity: 0;

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`;

function AppHeader() {
  return (
    <Header>
      <Logo>Logo</Logo>
      <Menu>
        <MenuItem>
          Menu 1
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem>
          Menu 2
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem>
          Menu 3
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem>
          Menu 4
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem>
          Menu 5
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
        <MenuItem>
          Menu 6
          <Dropdown>
            Submenu 1<br />
            Submenu 2
          </Dropdown>
        </MenuItem>
      </Menu>
    </Header>
  );
}

export default AppHeader;
