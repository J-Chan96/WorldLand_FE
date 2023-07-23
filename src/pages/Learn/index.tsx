import { Container } from 'style/layout';
import * as Styled from './index.style';
import Nav from 'components/Learn/LearnNav';
import Content from 'components/Learn/Content';

const Learn = () => {
  return (
    <Container $size={900}>
      <Styled.Content>
        <Nav />
        <Content />
      </Styled.Content>
    </Container>
  );
};

export default Learn;
