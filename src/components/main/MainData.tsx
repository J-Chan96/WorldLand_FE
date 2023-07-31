import styled from 'styled-components';
import { DecentralizedIcon, EnergyEfficiencyIcon, EvmCompatibilityIcon, PqSecurityIcon } from 'assets';
import { maxQuery } from 'utils/breakpoints';

const ContainerData = styled.div`
  font-family: 'Inter';
  width: 100%;
  background-color: black;
  color: #f4f4f4;
  overflow: hidden;
`;

const Head = styled.div`
  width: 80%;
  height: 50px;
  font-weight: bold;
  font-size: calc(20px + 2vmin);
  margin: 0 auto;
  margin-bottom: 20px;

  ${maxQuery.tablet} {
    font-size: 1.4rem;
  }
`;

const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 32px;

  ${maxQuery.tablet} {
    gap: 40px;

    div:nth-child(2n) {
      flex-direction: column-reverse;
    }
  }
`;

const Core = styled.div`
  display: flex;
  /* width: 90%; */
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  ${maxQuery.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    margin-top: 0;

    svg {
      max-width: 40vw;
    }
  }
`;

const Content = styled.div`
  gap: 16px;
  flex: 0.5;
  /* padding-top: 150px; */

  ${maxQuery.tablet} {
    justify-content: center;
  }
`;

const Body = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 1.5rem;

  ${maxQuery.tablet} {
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const Child = styled.div`
  color: #aaa;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  ${maxQuery.tablet} {
    text-align: center;
    font-size: 14px;
  }
`;

function MainData() {
  return (
    <ContainerData>
      <Head>Core Features</Head>
      <Section>
        <Core>
          <EvmCompatibilityIcon />
          <Content>
            <Body>EVM Compatibility</Body>
            <Child>
              Worldland is fully compatible with EVM, allowing all dApps and smart contracts on EVM to operate.
              <br />
              Experience your Ethereum dApp in a new way on Worldland.
            </Child>
          </Content>
        </Core>
        <Core>
          <Content>
            <Body>PQ Security</Body>
            <Child>
              Worldland's ECCPoW consensus algorithm utilizes coding theory to ensure robust security against attacks
              from quantum computers
            </Child>
          </Content>
          <PqSecurityIcon />
        </Core>
        <Core>
          <EnergyEfficiencyIcon />
          <Content>
            <Body>Energy Efficiency</Body>
            <Child>
              Worldland's Green VCA technology significantly reduces energy consumption in the mining process by
              randomly selecting miners.
            </Child>
          </Content>
        </Core>
        <Core>
          <Content>
            <Body>Decentralized</Body>
            <Child>
              The existing Proof of Work (POW) system faces issues of centralization due to ASIC devices. However,
              Worldland's network based on ECCPow reduces the efficiency of ASICS, defending the blockchain from
              centralization by ASIC devices
            </Child>
          </Content>
          <DecentralizedIcon />
        </Core>
      </Section>
    </ContainerData>
  );
}

export default MainData;
