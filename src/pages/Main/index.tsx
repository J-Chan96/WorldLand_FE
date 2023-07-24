import MainDashboard from 'components/main/MainDashboard';
import MainStatistics from 'components/main/MainStatistics';
import MainData from 'components/main/MainData';
import AppFooter from 'components/layout/AppFooter';
import Header from 'components/Header';

const Main = () => {
  return (
    <>
      <Header />
      <MainDashboard />
      <MainStatistics />
      <MainData />
      <AppFooter />
    </>
  );
};

export default Main;
