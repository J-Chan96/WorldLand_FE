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
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  gap: 16px;
  flex: 1 0 0;
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
        <Content>
          <Body1>EVM Compatibility</Body1>
          <Child>
            Worldland is fully compatible with EVM, allowing all dApps and smart contracts on EVM to operate.
            <br />
            Experience your Ethereum dApp in a new way on Worldland.
          </Child>
        </Content>
        <Content>
          <Body2>PQ Security</Body2>
          <Child>
            Worldland's ECCPoW consensus algorithm utilizes coding theory to ensure robust security against attacks from
            quantum computers
          </Child>
        </Content>
        <Content>
          <Body3>Energy Efficiency</Body3>
          <Child>
            Worldland's Green VCA technology significantly reduces energy consumption in the mining process by randomly
            selecting miners.
          </Child>
        </Content>
        <Content>
          <Body4>Decentralized</Body4>
          <Child>
            The existing Proof of Work (POW) system faces issues of centralization due to ASIC devices. However,
            Worldland's network based on ECCPow reduces the efficiency of ASICS, defending the blockchain from
            centralization by ASIC devices
          </Child>
        </Content>
      </Section>
    </ContainerData>
  );
}

export default MainData;
