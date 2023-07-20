import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: lightseagreen;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  width: 1280px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1280px) {
    padding: 0px 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Box1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 20px; /* 추가된 부분 */

  @media (max-width: 600px) {
    align-items: center;
    padding-right: 0; /* 추가된 부분 */
    margin-bottom: 20px; /* 추가된 부분 */
  }
`;

const Logo = styled.img`
  /* 로고 이미지 스타일 설정 */
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.img`
  /* 아이콘 이미지 스타일 설정 */
`;

const CopyrightText = styled.p`
  /* 저작권 텍스트 스타일 설정 */
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px; /* 추가된 부분 */

  @media (max-width: 600px) {
    align-items: center;
    padding-left: 0; /* 추가된 부분 */
  }
`;

const MenuTitle = styled.h2`
  /* 메뉴 제목 스타일 설정 */
`;

const MenuItem = styled.a`
  /* 메뉴 항목 스타일 설정 */
`;

const AppFooter = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Box1>
          <Logo src="logo.png" alt="Logo" />
          <IconWrapper>
            <Icon src="youtube-icon.png" alt="YouTube Icon" />
            <Icon src="discord-icon.png" alt="Discord Icon" />
          </IconWrapper>
          <CopyrightText>Worldland 저작권</CopyrightText>
        </Box1>
        <Box2>
          <MenuTitle>Menu Title</MenuTitle>
          <MenuItem href="#">Menu 1</MenuItem>
          <MenuItem href="#">Menu 2</MenuItem>
          <MenuItem href="#">Menu 3</MenuItem>
        </Box2>
      </FooterBox>
    </FooterContainer>
  );
};

export default AppFooter;
