import styled from 'styled-components';
import Img from '../../assets/images/3dicons.png';

const ContainerData = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  overflow: hidden;
`;

const Head = styled.div`
  width: 80%;
  height: 50px;
  font-weight: bold;
  font-size: calc(20px + 2vmin);
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  justify-content: row;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function MainData() {
  return (
    <ContainerData>
      <Head>There are WorldLand Technology</Head>
      <Section>
        <Content>
          <div>
            <Image src={Img} alt="3d"></Image>
          </div>
          <div>BlockChain 3D IMG</div>
        </Content>
        <Content>
          <div></div>
          <div></div>
        </Content>
        <Content>
          <div></div>
          <div></div>
        </Content>
        <Content>
          <div></div>
          <div></div>
        </Content>
      </Section>
    </ContainerData>
  );
}

export default MainData;
