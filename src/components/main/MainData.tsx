import styled from 'styled-components';

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
  padding-bottom: 30px;
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  /* align-items: center; */
  /* margin-left: 110px; */
  margin: 0 auto;
  gap: 32px;
  /* align-self: stretch; */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

const Body1 = styled.div`
  border-color: #1fcff1;
  border-left: 2px solid;
  padding-left: 15px;
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
const Body2 = styled.div`
  border-color: rgb(31, 207, 241);
  border-left: 2px solid;
  padding-left: 15px;
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
const Body3 = styled.div`
  border-color: rgb(31, 207, 241);
  border-left: 2px solid;
  padding-left: 15px;
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;
const Body4 = styled.div`
  border-color: rgb(31, 207, 241);
  border-left: 2px solid;
  padding-left: 15px;
  font-size: 1.75rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

function MainData() {
  return (
    <ContainerData>
      <Head>Core Features</Head>
      <Section>
        <Content>
          <Body1>EVM Compatibility</Body1>
        </Content>
        <Content>
          <Body2>PQ Security</Body2>
        </Content>
        <Content>
          <Body3>Energy Efficiency</Body3>
        </Content>
        <Content>
          <Body4>Decentralized</Body4>
        </Content>
      </Section>
    </ContainerData>
  );
}

export default MainData;
