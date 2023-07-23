import MainDashboard from 'components/Main/MainDashboard';
import MainStatistics from 'components/Main/MainStatistics';
import MainData from 'components/Main/MainData';
import AppFooter from 'components/layout/AppFooter';

const Main = () => {
  return (
    <>
      <MainDashboard />
      <MainStatistics />
      <MainData />
      <AppFooter />
    </>
  );
};

export default Main;
