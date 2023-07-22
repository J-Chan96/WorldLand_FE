import {
  DashboardContainer,
  ContentContainer,
  ImageContainer,
  Image,
  TextContainer,
  Text,
  SubText,
  ButtonContainer,
  DashBoardBtn,
  LearnBtn,
} from './MainDashboard.style';

const MainDashboard = () => {
  return (
    <DashboardContainer>
      <ContentContainer>
        <TextContainer>
          <Text>
            Let us build a global digital land called WorldLand.
            <SubText>
              We the people of WorldLand aim to establish a global free trade digital land. This will be a platform on
              which people from the five oceans and six continents can come and participate in one productive economy.
            </SubText>
          </Text>
          <ButtonContainer>
            <DashBoardBtn>Learn</DashBoardBtn>
            <LearnBtn>Docs</LearnBtn>
          </ButtonContainer>
        </TextContainer>
        <ImageContainer>
          <Image
            src="https://messari.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark.8aed0521.png&w=640&q=90"
            alt="Worldland"
          />
        </ImageContainer>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default MainDashboard;
