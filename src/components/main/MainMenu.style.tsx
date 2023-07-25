import styled from '@emotion/styled';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Menu = styled.div`
  display: flex;
  /* padding-left: 50px; */
  /* justify-content: center; */
  /* width: 100%; */
  /* width: auto; */
  height: 25px;
  align-items: center;
  /* margin: 0 auto; */
  /* margin-left: 400px; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div<{ isSelected?: boolean }>`
  margin: 0px 25px;
  position: relative;
  transition: color 0.3s ease-in-out;
  align-items: center;
  color: ${(props) => (props.isSelected ? 'white' : '#848895')};
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Dropdown = styled.div`
  display: block;
  position: absolute;
  background-color: black;
  font-size: 1rem;
  color: white;
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

const Learn = styled.a`
  text-decoration: none;
  color: #848895;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: white;
  }
`;

const SpaceLink = styled.a`
  text-decoration: none;
  padding: 5px 30px 5px 5px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition:
    border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
  line-height: 25px;

  &:hover {
    background-color: #1e1e1e;
    font-weight: bold;
  }
`;

const Strong = styled.div`
  color: white;
  font-weight: bold;
  padding: 0 20px;
  /* padding-top: 2px; */
`;

const Network = styled.div`
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease;
`;

const User = styled.div`
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

const Contack = styled.div`
  margin: 0px 25px;
  /* padding: 0px 25px; */
  position: relative;
  transition: color 0.3s ease-in-out;
  align-items: center;
  color: #848895;
  cursor: pointer;

  &:hover {
    color: white;
    text-decoration: underline;
  }
`;

export {
  Menu,
  Dropdown,
  MenuItem,
  CommunityDropdown,
  OutlineDown,
  OutlineUp,
  Learn,
  SpaceLink,
  Strong,
  Network,
  User,
  Divider,
  Contack,
};
