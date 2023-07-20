// import React from 'react';
// import styled from 'styled-components';
// import GithubIcon from '../../assets/images/github.png';
// import YoutubeIcon from '../../assets/images/youtube.png';

// const FooterContainer = styled.footer`
//   display: flex;
//   padding: 160px 0px;
//   flex-direction: column;
//   align-items: center;
//   align-self: stretch;
//   background-color: #1c1d20;

//   @media (max-width: 600px) {
//     padding: 20px;
//   }
// `;

// const FooterBox = styled.div`
//   display: flex;
//   width: 80%;
//   justify-content: space-between;
//   align-items: center;

//   @media (max-width: 1280px) {
//     padding: 0px 20px;
//   }

//   @media (max-width: 600px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// const Box1 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding-right: 20px; /* 추가된 부분 */

//   @media (max-width: 600px) {
//     align-items: center;
//     padding-right: 0; /* 추가된 부분 */
//     margin-bottom: 20px; /* 추가된 부분 */
//   }
// `;

// const Logo = styled.img`
//   /* 로고 이미지 스타일 설정 */
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   margin-top: 10px;
// `;

// const Icon = styled.img`
//   /* 아이콘 이미지 스타일 설정 */
//   margin-right: 10px;
// `;

// const CopyrightText = styled.p`
//   /* 저작권 텍스트 스타일 설정 */
//   color: #aaa;
//   font-family: Inter;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   text-transform: capitalize;
// `;

// const Box2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-left: 20px;

//   @media (max-width: 600px) {
//     align-items: center;
//     padding-left: 0;
//   }
// `;

// const MenuTitle = styled.h2`
//   color: #f4f4f4;
//   font-family: Inter;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   text-transform: capitalize;
// `;

// const MenuItem = styled.a`
//   color: #aaa;
//   font-family: Inter;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   text-transform: lowercase;
//   text-align: center;
// `;

// const AppFooter = () => {
//   return (
//     <FooterContainer>
//       <FooterBox>
//         <Box1>
//           {/* <Logo src="../../asset/images/WorldlandIcon.svg" alt="Logo" /> */}
//           <div
//             style={{
//               color: '#aaa',
//               fontFamily: 'Inter',
//               fontSize: '16px',
//               fontStyle: 'normal',
//               fontWeight: 400,
//               lineHeight: 'normal',
//               textTransform: 'capitalize',
//             }}
//           >
//             Managed by
//           </div>
//           <div
//             style={{
//               color: '#aaa',
//               fontFamily: 'Inter',
//               fontSize: '16px',
//               fontStyle: 'normal',
//               fontWeight: 400,
//               lineHeight: 'normal',
//               textTransform: 'capitalize',
//             }}
//           >
//             Logo
//           </div>
//           <IconWrapper>
//             <Icon src={YoutubeIcon} alt="Icon 1" />
//             <Icon src={GithubIcon} alt="Icon 2" />
//             <Icon src={YoutubeIcon} alt="Icon 3" />
//             <Icon src={GithubIcon} alt="Icon 4" />
//             <Icon src={YoutubeIcon} alt="Icon 5" />
//             <Icon src={GithubIcon} alt="Icon 6" />
//           </IconWrapper>
//           <CopyrightText>© 2022 - 2023 WorldLand. All rights reserved.</CopyrightText>
//         </Box1>
//         <Box2>
//           <MenuTitle>Menu Title</MenuTitle>
//           <MenuItem href="#">Menu 1</MenuItem>
//           <MenuItem href="#">Menu 2</MenuItem>
//           <MenuItem href="#">Menu 3</MenuItem>
//         </Box2>
//       </FooterBox>
//     </FooterContainer>
//   );
// };

// export default AppFooter;
import React from 'react';
import styled from 'styled-components';
import GithubIcon from '../../assets/images/github.png';
import YoutubeIcon from '../../assets/images/youtube.png';

const FooterContainer = styled.footer`
  display: flex;
  padding: 160px 0px;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: #1c1d20;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const FooterBox = styled.div`
  display: flex;
  width: 80%;
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
  padding-right: 20px;

  @media (max-width: 600px) {
    align-items: center;
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Logo = styled.img`
  /* 로고 이미지 스타일 설정 */
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

const Icon = styled.img`
  /* 아이콘 이미지 스타일 설정 */
  margin-right: 14px;

  @media (max-width: 600px) {
    margin-right: 10px;
  }
`;

const CopyrightText = styled.p`
  /* 저작권 텍스트 스타일 설정 */
  color: #aaa;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;

  @media (max-width: 600px) {
    align-items: center;
    padding-left: 0;
  }
`;

const MenuTitle = styled.h2`
  color: #f4f4f4;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
`;

const MenuItem = styled.a`
  color: #aaa;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: lowercase;
  text-align: center;
`;

const AppFooter = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <Box1>
          <div
            style={{
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
          {/* <Logo src="path/to/logo.png" alt="Logo" /> */}
          <div
            style={{
              color: '#aaa',
              fontFamily: 'Inter',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}
          >
            Logo
          </div>
          <IconWrapper>
            <Icon src={YoutubeIcon} alt="Icon 1" />
            <Icon src={GithubIcon} alt="Icon 2" />
            <Icon src={YoutubeIcon} alt="Icon 3" />
            <Icon src={GithubIcon} alt="Icon 4" />
            <Icon src={YoutubeIcon} alt="Icon 5" />
            <Icon src={GithubIcon} alt="Icon 6" />
          </IconWrapper>
          <CopyrightText>© 2022 - 2023 WorldLand. All rights reserved.</CopyrightText>
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
