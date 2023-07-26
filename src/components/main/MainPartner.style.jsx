import styled from 'styled-components';

const PartnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: black;
  padding: 20px; /* Added padding for all screen sizes */

  /* Media query for screens with a maximum width of 600px */
  @media (max-width: 600px) {
    padding: 10px; /* Adjust the padding for smaller screens */
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
  margin-top: 150px; /* Initial margin-top for the icons */

  /* Media query for screens with a maximum width of 600px */
  @media (max-width: 600px) {
    margin-top: 100px; /* Adjust the margin-top for smaller screens */
    flex-direction: column; /* Stack the icons vertically */
    align-items: center; /* Center the icons horizontally */
  }
`;

const Icon = styled.img`
  height: auto;
  width: 70px;
`;

const Icon2 = styled.img`
  height: auto;
  width: 200px;
`;

const Icon3 = styled.img`
  height: auto;
  width: 120px;
`;

const Icon4 = styled.img`
  height: auto;
  width: 150px;
`;

export { PartnerContainer, Contact1, IconWrap, Icon, Icon2, Icon3, Icon4 };