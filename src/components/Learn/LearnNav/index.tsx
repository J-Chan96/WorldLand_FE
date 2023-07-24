import React, { useState } from 'react';
import { learnMenus } from 'constants/learnMenus';

import { Container } from 'style/layout';
import { useLocation } from 'react-router-dom';
import { Menu, Nav, SubMenu } from './index.style';

const LearnNav = ({ menus = learnMenus }) => {
  const location = useLocation();

  return (
    <Nav $size={121}>
      {menus.map((menu) => {
        return (
          <ul>
            {menu.menuType === 'menu' && (
              <li key={menu.menuType}>
                <Menu to={menu.path} isActive={location.pathname === menu.path}>
                  {menu.value}
                </Menu>
              </li>
            )}
            {menu.menuType === 'subMenu' && (
              <li key={menu.menuType}>
                <SubMenu to={menu.path} isActive={location.pathname === menu.path}>
                  {menu.value}
                </SubMenu>
              </li>
            )}
          </ul>
        );
      })}
    </Nav>
  );
};

export default LearnNav;
