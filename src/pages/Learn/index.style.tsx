import { styled } from 'styled-components';

const Content = styled.section`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  gap: 40px;
`;

const Post = styled.article`
  display: flex;
  width: 100%;
  max-width: 707px;
  flex-direction: column;
  font-family: 'Inter';
  color: #ccc;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  h1 {
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: 45px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 20px;
    line-height: 30px;
    font-weight: 700;
  }

  li {
    margin-left: 16px;
  }

  img {
    margin: 24px 36px;
  }

  ol {
    list-style-type: decimal;
    margin-left: 16px;
  }

  strong {
    font-weight: 700;
  }
`;

export { Content, Post };
