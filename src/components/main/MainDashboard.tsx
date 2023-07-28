import {
  DashboardContainer,
  VideoContainer,
  Video,
  ContentContainer,
  TextContainer,
  Text,
  SubText,
  ButtonContainer,
  DocsBtn,
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
            <LearnBtn>Learn</LearnBtn>
            <DocsBtn>Docs</DocsBtn>
          </ButtonContainer>
        </TextContainer>
        <VideoContainer>
          <Video autoPlay loop muted playsInline>
            <source src="/videos/MainVideo.mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </ContentContainer>
    </DashboardContainer>
  );
};

export default MainDashboard;
