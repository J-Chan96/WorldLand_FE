import styled from 'styled-components';
import HamburgerBtn from 'components/main/HamburgerBtn';
import MainMenu from 'components/main/MainMenu';

const Container = styled.div`
  /* width: auto; */
  /* margin-left: 100px; */
  /* width: 100%; */
  /* display: flex; */
  /* justify-content: space-evenly; */
  /* flex-direction: column; */
`;

const Header = styled.header`
  height: 65px;
  background: black;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width: 100%; */
  /* margin: 0 auto; */
  /* background-color: rgb(18, 22, 30); */
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
const Logo = styled.div`
  /* margin-left: 70px; */
  /* flex: ; */
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

function AppHeader() {
  return (
    <Container>
      <Header>
        <Logo>Logo</Logo>
        <MainMenu />
        <HamburgerBtn />
      </Header>
    </Container>
  );
}

export default AppHeader;
