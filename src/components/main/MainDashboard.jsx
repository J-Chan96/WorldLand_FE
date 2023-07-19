import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  height: 80vh;
  margin: 0 auto;
  align-items: top;
  min-height: 600px;
  width: 100%;
  background-image: radial-gradient(
    circle farthest-side at 60% 75%,
    #ffffff -100%,
    rgba(0, 30, 66, 1.5) 25%,
    rgba(10, 17, 20, 2) 100%
  );
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
  justify-content: center;
  width: 100%;
  height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;

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
  width: 30%;
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
  color: #f3f4f6;
  font-size: 32px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SubText = styled.h6`
  color: #b3bacb;
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

const DashBoardBtn = styled.button`
  margin: 0px;
  width: 160px;
  text-decoration: none;
  font-size: 1rem;
  font-family: 'Avenir', system-ui, sans-serif;
  -webkit-box-align: center;
  background-color: #016bd4;

  border: none;
  color: rgba(255, 255, 255, 0.95);

  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  height: 44px;
  line-height: 1;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0px, 24px;
  white-space: nowrap;
  border-radius: 4px;
  align-items: center;

  &:hover {
    background-color: #2381df;
  }
`;

const LearnBtn = styled.button`
  padding: 0px 24px;
  white-space: nowrap;
  width: fit-content;
  font-family: 'Avenir', system-ui, sans-serif;
  background-color: transparent;
  border: 1px solid currentcolor;
  color: #0091ea;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  height: 44px;
  cursor: pointer;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

function MainDashboard() {
  return (
    <DashboardContainer>
      <ContentContainer>
        <TextContainer>
          <Text>
            Making Smarter & Safer Decisions Starts with Our Data
            <SubText>
              Messari helps businesses, compliance teams, builders, and investors navigate the crypto economy.
            </SubText>
          </Text>
          <ButtonContainer>
            <DashBoardBtn>Go to Dashboard</DashBoardBtn>
            <LearnBtn>Learn more</LearnBtn>
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
}

export default MainDashboard;
