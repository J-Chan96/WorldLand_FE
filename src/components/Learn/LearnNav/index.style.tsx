import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

interface ContainerProps {
  $size: number;
}

const Nav = styled.nav<ContainerProps>`
  width: 100%;
  max-width: ${({ $size }) => `${$size}px`};
  font-size: var(--text-size-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      font-family: 'Inter';
      list-style-type: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
`;

const Menu = styled(Link)<{ isActive: boolean }>`
  ${(props) => {
    const { isActive, theme } = props;
    const color = isActive ? theme.colors.white : theme.colors.white900;
    const textUnderline = isActive ? 'underline' : '';

    return `
      color: ${color};
      text-decoration-line: ${textUnderline};
      font-weight: 500;
    `;
  }}
`;

const SubMenu = styled(Link)<{ isActive: boolean }>`
  ${(props) => {
    const { isActive, theme } = props;
    const color = isActive ? theme.colors.white : theme.colors.white800;
    const textUnderline = isActive ? 'underline' : '';

    return `
      color: ${color};
      text-decoration-line: ${textUnderline};
      padding-left: 16px;
      font-weight: 400;
    `;
  }}
`;

export { Nav, Menu, SubMenu };
