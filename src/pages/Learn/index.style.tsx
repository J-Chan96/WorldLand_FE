import { styled } from 'styled-components';

const Content = styled.section`
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 40px;
`;

const Post = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: 'Inter';

  h1 {
    color: #ccc;
    font-size: 26px;
    font-style: normal;
    font-weight: 800;
    line-height: 39px; /* 150% */
    text-transform: capitalize;

    margin-bottom: 16px;
  }

  p {
    color: #ccc;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

export { Content, Post };
