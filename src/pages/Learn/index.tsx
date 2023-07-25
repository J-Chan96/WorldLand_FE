import Nav from 'components/Learn/LearnNav';
import AppHeader from 'components/layout/AppHeader';
import { Container } from 'style/layout';
import { Content, Post } from './index.style';
import { Outlet } from 'react-router-dom';
import LearnFooter from 'components/Learn/LearnFooter';

const Learn = () => {
  return (
    <>
      <AppHeader />
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
