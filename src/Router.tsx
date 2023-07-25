import Main from 'pages/Main';
import Learn from 'pages/Learn';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Charter from 'components/Learn/Post/Charter';
import { PATH } from 'constants/path';
import Overview from 'components/Learn/Post/Overview';
import EccPow from 'components/Learn/Post/ECCPoW';
import ASICResistance from 'components/Learn/Post/ASICResistance';
import PQsecurity from 'components/Learn/Post/PQsecurity';
import GreenVCA from 'components/Learn/Post/GreenVCA';
import DesignPrinciple from 'components/Learn/Post/DesignPrinciple';
import Tokenomics from 'components/Learn/Post/Tokenomics';
import HowWorks from 'components/Learn/Post/HowWorks';
import Governance from 'components/Learn/Post/Governance';

const Router = () => {
  const router = createBrowserRouter([
    { path: `${PATH.MAIN}`, element: <Main /> },
    {
      path: `${PATH.LEARN}`,
      element: <Learn />,
      children: [
        { index: true, element: <Charter /> },
        { path: `${PATH.LEARN_OVERVIEW}`, element: <Overview /> },
        { path: `${PATH.LEARN_ECCPOW}`, element: <EccPow /> },
        { path: `${PATH.LEARN_ASIC_RESISTENCE}`, element: <ASICResistance /> },
        { path: `${PATH.LEARN_PQ_SECURITY}`, element: <PQsecurity /> },
        { path: `${PATH.LEARN_GREEN_VCA}`, element: <GreenVCA /> },
        { path: `${PATH.LEARN_DESIGN_PRINCIPLE}`, element: <DesignPrinciple /> },
        { path: `${PATH.LEARN_HOW_WORKS}`, element: <HowWorks /> },
        { path: `${PATH.LEARN_TOKENOMICS}`, element: <Tokenomics /> },
        { path: `${PATH.LEARN_GOVERNANCE}`, element: <Governance /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
