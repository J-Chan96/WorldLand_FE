import styled from 'styled-components';

const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: black;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Contact1 = styled.div`
  display: flex;
  height: auto;
  width: 80%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Icon = styled.img`
  margin-top: 150px;
  width: 70px;
  height: auto;
  /* Style for the icon images */
`;

const Icon2 = styled.img`
  margin-top: 150px;
  width: 200px;
  height: auto;
  /* Style for the icon images */
`;

const Icon3 = styled.img`
  margin-top: 150px;
  width: 120px;
  height: auto;
  /* Style for the icon images */
`;

const Icon4 = styled.img`
  margin-top: 150px;
  width: 150px;
  height: auto;
  /* Style for the icon images */
`;

export { PartnerContainer, Contact1, IconWrap, Icon, Icon2, Icon3, Icon4 };
