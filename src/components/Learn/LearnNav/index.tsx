import React, { useState } from 'react';
import { learnMenus } from 'constants/learnMenus';
import { Nav, Menu, SubMenu } from './index.style';
import { Container } from 'style/layout';
import { Link, useLocation } from 'react-router-dom';

const checkActive = (pathname: string, menuPath: string) => {
  if (menuPath === '/') return pathname === menuPath;

  return pathname.includes(menuPath);
};

const LearnNav = ({ menus = learnMenus }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const location = useLocation();

  return (
    <Container $size={121}>
      <Nav>
        {menus.map((menu) => {
          return (
            <ul>
              <li key={menu.value}>
                <Menu to={menu.path} isActive={checkActive(location.pathname, menu.path)}>
                  {menu.value}
                </Menu>
              </li>
              {menu.subMenu && (
                <>
                  {menu.subMenu.map((subMenu) => (
                    <li key={subMenu.value}>
                      <SubMenu to={subMenu.path} isActive={checkActive(location.pathname, subMenu.path)}>
                        {subMenu.value}
                      </SubMenu>
                    </li>
                  ))}
                </>
              )}
            </ul>
          );
        })}
      </Nav>
    </Container>
  );
};

export default LearnNav;
