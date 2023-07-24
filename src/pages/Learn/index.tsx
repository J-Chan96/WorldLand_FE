import Nav from 'components/learn/LearnNav';
import Header from 'components/Header';
import { Container } from 'style/layout';
import { Content, Post } from './index.style';
import { Outlet } from 'react-router-dom';
import LearnFooter from 'components/learn/LearnFooter';

const Learn = () => {
  return (
    <>
      <Header />
      <Container $size={900}>
        <Content>
          <Nav />
          <Post>
            <Outlet />
          </Post>
        </Content>
        <LearnFooter />
      </Container>
    </>
  );
};

export default Learn;
