import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: relative; /* Add this to allow absolute positioning of the video and text */
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 600px;
  width: 100%;
  background-color: black;
  overflow: hidden;

  @media (max-width: 768px) {
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 20px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  /* 숨길 컨트롤 요소들을 선택하여 스타일을 적용합니다. */
  video::-webkit-media-controls-panel,
  video::-webkit-media-controls-overlay-play-button,
  video::-webkit-media-controls-start-playback-button {
    display: none !important;
    opacity: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: auto;
  z-index: 1; /* Add this to ensure the text is above the video */

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 20px;
    order: 3;
  }
`;

const Text = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 38px;
  color: #f4f4f4;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: 57px; /* 150% */
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  text-align: left;
  margin-top: 35px;
  color: #aaa;
  font-family: Inter;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px; /* 150% */

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  order: 1;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

const LearnBtn = styled.button`
  /* margin: 0px;
  width: 90px;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Avenir', system-ui, sans-serif;
  -webkit-box-align: center;
  background-color: #f4f4f4;
  border: none;
  color: black;
  cursor: pointer;
  display: inline-flex;
  font-weight: 600;
  height: 44px;
  line-height: 1;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px, 24px;
  white-space: nowrap;
  border-radius: 4px;
  align-items: center; */
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  background: #f4f4f4;

  &:hover {
    background-color: #a7a7a7;
  }
`;

const DocsBtn = styled.button`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid #f4f4f4;

  &:hover {
    background-color: #2d2d2d;
  }
`;

const LearnText = styled.span`
  color: #060606;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  text-transform: capitalize;
`;

const DocsText = styled.span`
  color: #f4f4f4;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  text-transform: capitalize;
`;

export {
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
  LearnText,
  DocsText,
};
