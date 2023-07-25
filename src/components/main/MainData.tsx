import styled from 'styled-components';
import { Decentralized, EVM, Energy, Security } from 'assets/main/Main';

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
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 32px;
`;

const Core = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const Content = styled.div`
  gap: 16px;
  flex: 0.5;
  /* padding-top: 150px; */
`;

const Body1 = styled.div`
  border-left: 2px solid rgb(31, 207, 241);
  padding-left: 15px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const Body2 = styled.div`
  border-left: 2px solid #e9c311;
  padding-left: 15px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const Body3 = styled.div`
  border-left: 2px solid #5a2995;
  padding-left: 15px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;
const Body4 = styled.div`
  border-left: 2px solid rgb(25, 251, 155);
  padding-left: 15px;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Child = styled.div`
  color: #aaa;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

function MainData() {
  return (
    <ContainerData>
      <Head>Core Features</Head>
      <Section>
        <Core>
          <EVM />
          <Content>
            <Body1>EVM Compatibility</Body1>
            <Child>
              Worldland is fully compatible with EVM, allowing all dApps and smart contracts on EVM to operate.
              <br />
              Experience your Ethereum dApp in a new way on Worldland.
            </Child>
          </Content>
        </Core>
        <Core>
          <Content>
            <Body2>PQ Security</Body2>
            <Child>
              Worldland's ECCPoW consensus algorithm utilizes coding theory to ensure robust security against attacks
              from quantum computers
            </Child>
          </Content>
          <Security />
        </Core>
        <Core>
          <Energy />
          <Content>
            <Body3>Energy Efficiency</Body3>
            <Child>
              Worldland's Green VCA technology significantly reduces energy consumption in the mining process by
              randomly selecting miners.
            </Child>
          </Content>
        </Core>
        <Core>
          <Content>
            <Body4>Decentralized</Body4>
            <Child>
              The existing Proof of Work (POW) system faces issues of centralization due to ASIC devices. However,
              Worldland's network based on ECCPow reduces the efficiency of ASICS, defending the blockchain from
              centralization by ASIC devices
            </Child>
          </Content>
          <Decentralized />
        </Core>
      </Section>
    </ContainerData>
  );
}

export default MainData;
