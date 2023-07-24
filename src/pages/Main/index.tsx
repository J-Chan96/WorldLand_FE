import MainDashboard from 'components/main/MainDashboard';
import MainStatistics from 'components/main/MainStatistics';
import MainData from 'components/main/MainData';
import AppFooter from 'components/layout/AppFooter';
import AppHeader from 'components/layout/AppHeader';

const Main = () => {
  return (
    <>
      <AppHeader />
      <MainDashboard />
      <MainStatistics />
      <MainData />
      <AppFooter />
    </>
  );
};

export default Main;
