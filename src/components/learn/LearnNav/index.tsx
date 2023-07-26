import { learnMenus } from 'constants/learnMenus';
import { useLocation } from 'react-router-dom';
import { Menu, Nav, SubMenu } from './index.style';

const LearnNav = ({ menus = learnMenus }) => {
  const excludedValues = ['About WorldLand', 'Technology'];

  const location = useLocation();

  return (
    <Nav $size={121}>
      <ul>
        {menus.map((menu) => {
          return (
            <>
              {menu.menuType === 'menu' && (
                <li>
                  <Menu
                    key={menu.menuType}
                    to={menu.path}
                    isActive={!excludedValues.includes(menu.value) && location.pathname === menu.path}
                  >
                    {menu.value}
                  </Menu>
                </li>
              )}
              {menu.menuType === 'subMenu' && (
                <li>
                  <SubMenu key={menu.menuType} to={menu.path} isActive={location.pathname === menu.path}>
                    {menu.value}
                  </SubMenu>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </Nav>
  );
};

export default LearnNav;