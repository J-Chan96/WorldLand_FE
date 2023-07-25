import MainDashboard from 'components/main/MainDashboard';
import MainStatistics from 'components/main/MainStatistics';
import MainData from 'components/main/MainData';
import AppFooter from 'components/layout/AppFooter';
import AppHeader from 'components/layout/AppHeader';
import MainPartner from 'components/main/MainPartner';

const Main = () => {
  return (
    <>
      <AppHeader />
      <MainDashboard />
      <MainStatistics />
      <MainData />
      <MainPartner />
      <AppFooter />
    </>
  );
};

export default Main;
