import styled from '@emotion/styled';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Menu = styled.nav`
  display: flex;
  height: 25px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  margin: 0px 25px;
  position: relative;
  transition: color 0.3s ease-in-out;
  align-items: center;
  border-bottom: ${(props: any) => (props['data-isactive'] ? '2px solid #f9a109' : '2px solid transparent')};
  color: ${(props: any) => (props['data-isactive'] ? '#f9a109' : 'none')};
  &:hover {
    color: #f9a109;
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  display: block;
  position: absolute;
  background-color: rgb(18, 22, 30);
  font-size: 1rem;
  color: #fff;
  top: calc(100% + 1rem);
  border-radius: 12px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    visibility 0.3s;
  transform: translateY(${(props: any) => (props['data-isvisible'] ? '0' : '-10px')});
  opacity: ${(props: any) => (props['data-isvisible'] ? '1' : '0')};
  visibility: ${(props: any) => (props['data-isvisible'] ? 'visible' : 'hidden')};
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  padding: 25px;
  white-space: nowrap;
  backdrop-filter: blur(10px);
`;

const CommunityDropdown = styled(Dropdown)`
  left: -250px;
  /* overflow-x: hidden; */
`;

const OutlineDown = styled(AiOutlineDown)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;

const OutlineUp = styled(AiOutlineUp)`
  width: 16px;
  height: 16px;
  vertical-align: middle;
`;

const SpaceLink = styled.a`
  text-decoration: none;
  color: #848895;
  padding: 10px 50px 5px 10px;
  margin: 0.5rem -0.5rem;
  border: 1px solid transparent;
  border-radius: 8px;
  transition:
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  line-height: 25px;
  &:hover {
    color: white;
    font-weight: bold;
    border-color: #848895;
  }
`;

const Strong = styled.div`
  color: white;
  font-weight: bold;
  /* padding-top: 2px; */
`;

const Network = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease;
`;

const Divider = styled.div`
  width: 1px;
  height: auto;
  color: red;
  /* margin: -1rem, 2.5rem; */
  /* margin-right: -20px; */
  margin-left: 18px;
  margin-right: 20px;
  background: hsla(0, 0%, 100%, 0.1);
`;

export { Menu, Dropdown, MenuItem, CommunityDropdown, OutlineDown, OutlineUp, SpaceLink, Strong, Network, Divider };
