import { styled } from 'styled-components';

interface PageProps {
  $size: number;
}

const Container = styled.main<PageProps>`
  width: 100%;
  max-width: ${({ $size }) => `${$size}px`};
  margin: 0 auto;
`;

export { Container };
