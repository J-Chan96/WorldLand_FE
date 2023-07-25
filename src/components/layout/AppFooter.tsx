import React from 'react';
import styled from 'styled-components';
import twitter from '../../assets/footer/icons/twitter.svg';
import discord from '../../assets/footer/icons/discord.svg';
import youtube from '../../assets/footer/icons/youtube.svg';
import github from '../../assets/footer/icons/github.svg';
import logo from '../../assets/footer/images/Logo.svg';

const FooterContainer = styled.footer`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: black;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Contact1 = styled.div`
  display: flex;
  height: 230px;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Logo = styled.img`
  /* Style for the logo image */
  /* background:
    url(<path-to-image>),
    lightgray 50% / cover no-repeat; */
  /* background-color: black;
  width: 100px; */
`;

const IconWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
  /* Style for the icon images */
`;

const CopyrightText = styled.p`
  color: #aaa;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  /* Style for the copyright text */
`;

const AppFooter = () => {
  return (
    <FooterContainer>
      <Contact1>
        <ContactWrap>
          <div
            style={{
              width: 'auto 95',
              height: 'auto 19',
              color: '#aaa',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}
          >
            Managed by
          </div>
          {/* Add your Logo here */}
          <Logo src={logo} alt="Logo" />
        </ContactWrap>
        <IconWrap>
          {/* Add your icons here */}
          <Icon src={twitter} alt="Icon 1" />
          <Icon src={discord} alt="Icon 2" />
          <Icon src={youtube} alt="Icon 3" />
          <Icon src={github} alt="Icon 4" />
        </IconWrap>
        <CopyrightText>© 2022 - 2023 WorldLand. All rights reserved.</CopyrightText>
      </Contact1>
    </FooterContainer>
  );
};

export default AppFooter;

// 과기부 // 국방과학연구소 // 한국연구재단 // IITP // 광주광역시청 //
