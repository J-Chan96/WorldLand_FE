import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';

interface MenuListProps {
  isopen: string;
}

const MenuList = styled.ul<MenuListProps>`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isopen === 'true' ? 'block' : 'none')};
    font-size: 1.1rem;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 45px;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: #12161f;
    z-index: 2;
    list-style: none;
    /* 나머지 스타일링 */
  }
`;

const Li = styled.li`
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  font-size: 1.1rem;
`;

const Button = styled.button<{ isSelected?: boolean }>`
  // Button 스타일
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => (props.isSelected ? 'white' : '#848895')};
  background: none;
  padding: 1.3rem 0;
  border: none;
  font-weight: 800;
  font-size: 15px;
  transition: color 0.3s ease-in-out;

  .icon {
    margin-right: 70px;
    font-size: 15px;
    font-weight: bold;
    /* white-space: nowrap; */
  }

  .learn {
    text-decoration: none;
    color: #848895;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: white;
    }
  }

  &:hover {
    color: white;
  }
`;

const Dropdown = styled.div`
  background: black;
  padding: 25px 25px 15px 25px;
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 12px;
  margin-right: 70px;
  .user-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .user-menu .user {
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 8px;
    transition:
      background-color 0.3s ease-in-out,
      border-color 0.3s ease-in-out;
    text-decoration: none;
    color: white;
    &:hover {
      background-color: #1e1e1e;
    }
  }

  .divider {
    background: hsla(0, 0%, 100%, 0.1);
    height: 2px;
    margin: 2.5rem --1.625rem;
    margin-bottom: 15px;
  }
`;

const HamburgerIcon = styled(BiMenu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 70px;
    z-index: 3;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }
`;

const HamburgerOutIcon = styled(AiOutlineClose)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 70px;
    z-index: 3;
    font-size: 2em;
    color: white;
    cursor: pointer;
  }
`;

export { MenuList, Li, Button, Dropdown, HamburgerIcon, HamburgerOutIcon };
