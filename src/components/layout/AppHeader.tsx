import styled from 'styled-components';
import HamburgerBtn from '../main/HamburgerBtn';
import MainMenu from '../main/MainMenu';

const Header = styled.header`
  height: 65px;
  background: #12161f;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(18, 22, 30);
  box-shadow:
    rgba(0, 0, 0, 0.15) 0px 2px 6px 2px,
    rgba(0, 0, 0, 0.3) 0px 1px 2px;
  user-select: none;
  @media (max-width: 768px) {
    flex-direction: row;
    position: fixed;
    width: 100vw;
    justify-content: start;
    padding-left: 40px;
  }
`;
const Logo = styled.div``;

function AppHeader() {
  return (
    <Header>
      <Logo>Logo</Logo>
      <MainMenu />
      <HamburgerBtn />
    </Header>
  );
}

export default AppHeader;
