import styled from 'styled-components';
import HamburgerBtn from 'components/main/HamburgerBtn';
import MainMenu from 'components/main/MainMenu';
import { Link } from 'react-router-dom';
import { maxQuery } from 'utils/breakpoints';
import { theme } from 'style/theme';
import { WorldLandLogo } from 'assets';

const Header = styled.header`
  font-family: 'Inter';
  height: 65px;
  background: black;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px 2px,
    rgba(0, 0, 0, 0.3) 0px 1px 2px;
  user-select: none;
  border-bottom: 1px solid ${theme.colors.black700};

  ${maxQuery.tablet} {
    flex-direction: row;
    position: fixed;
    width: 100%;
    padding: 0 20px;
    justify-content: space-between;
    z-index: 2;

    svg {
      cursor: pointer;
    }
  }
`;
const LogoWrapper = styled.div`
  /* margin-left: 100px; */
  color: ${theme.colors.white};

  svg {
    height: 26px;
  }

  ${maxQuery.tablet} {
    margin-left: 0;

    svg {
      height: 12px;
    }
  }
`;

function AppHeader() {
  return (
    <Header>
      <Link to={'/'}>
        <LogoWrapper>
          <WorldLandLogo />
        </LogoWrapper>
      </Link>
      <MainMenu />
      <HamburgerBtn />
    </Header>
  );
}

export default AppHeader;
