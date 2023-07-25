import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  align-items: top;
  min-height: 600px;
  width: 100%;
  background-color: black;
  /* background-image: radial-gradient(
    circle farthest-side at 60% 75%,
    #ffffff -100%,
    rgba(0, 30, 66, 1.5) 25%,
    rgba(10, 17, 20, 2) 100%
  ); */
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

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;

  @media (max-width: 768px) {
    flex: none;
    margin-top: 20px;
    margin-left: 0;
    order: 2;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 300px;
    order: 1;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: column;
  width: 40%;
  height: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 20px;
    order: 3;
  }
`;

const Text = styled.h1`
  margin-bottom: 30px;
  color: #f3f4f6;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.p`
  color: #b3bacb;
  margin-top: 35px;
  font-weight: 400;
  font-size: 22.4px;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-start; /* 버튼을 왼쪽으로 정렬합니다. */
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
  margin: 0px;
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
  align-items: center;

  &:hover {
    background-color: #a7a7a7;
  }
`;

const DocsBtn = styled.button`
  padding: 0px 24px;
  white-space: nowrap;
  width: fit-content;
  font-family: 'Avenir', system-ui, sans-serif;
  background-color: transparent;
  border: 1px solid currentcolor;
  color: #f4f4f4;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  height: 44px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: #a7a7a7;
  }
`;

export {
  DashboardContainer,
  ContentContainer,
  ImageContainer,
  Image,
  TextContainer,
  Text,
  SubText,
  ButtonContainer,
  DocsBtn,
  LearnBtn,
};
