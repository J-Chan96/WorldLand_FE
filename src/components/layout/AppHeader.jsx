import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Menu = styled.nav`
  display: flex;
`;

const MenuItem = styled.div`
  margin: 0 10px;
  position: relative;

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
  margin-top: 10px;
`;

function AppHeader() {
  return (
    <Header>
      <div>Logo</div>
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
      </Menu>
    </Header>
  );
}

export default AppHeader;
