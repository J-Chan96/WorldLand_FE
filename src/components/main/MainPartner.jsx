import gg56 from '../../assets/main/images/gg56.png';
import AIICPG from '../../assets/main/images/AIICPG.png';
import gist from '../../assets/main/images/gist.svg';
import consensys from '../../assets/main/images/consensys.svg';
import { PartnerContainer, Contact1, IconWrap, Icon, Icon2, Icon3, Icon4 } from './MainPartner.style';

const MainPartner = () => {
  return (
    <PartnerContainer>
      <Contact1>
        <IconWrap>
          {/* Add your icons here */}
          <Icon src={gg56} alt="Icon 1" />
          <Icon2 src={AIICPG} alt="Icon 2" />
          <Icon3 src={gist} alt="Icon 3" />
          <Icon4 src={consensys} alt="Icon 4" />
        </IconWrap>
      </Contact1>
    </PartnerContainer>
  );
};

export default MainPartner;
