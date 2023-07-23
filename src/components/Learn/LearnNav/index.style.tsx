import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  font-size: var(--text-size-primary);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;

  ul > li {
    font-family: 'Inter';
    list-style-type: none;
    cursor: pointer;
  }
`;

const Menu = styled(Link)<{ isActive: boolean }>`
  ${(props) => {
    const { isActive, theme } = props;
    const color = isActive ? theme.colors.white : theme.colors.white900;
    const textUnderline = isActive ? 'underline' : '';

    return `
      color: ${color};
      text-decoration-line: ${textUnderline}
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
      text-decoration-line: ${textUnderline}
    `;
  }}
`;

export { Nav, Menu, SubMenu };
