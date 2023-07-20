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
`;

const Section = styled.div`
  display: flex;
`;

function MainData() {
  return (
    <ContainerData>
      <Head>There are WorldLand Technology</Head>
      <Section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Section>
    </ContainerData>
  );
}

export default MainData;
