import Main from 'pages/Main';
import Learn from 'pages/Learn';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutWorldLand from 'components/learn/Post/AboutWorldLand';
import Charter from 'components/learn/Post/Charter';
import { PATH } from 'constants/path';

const Router = () => {
  const router = createBrowserRouter([
    { path: `${PATH.MAIN}`, element: <Main /> },
    {
      path: `${PATH.LEARN}`,
      element: <Learn />,
      children: [
        { index: true, element: <AboutWorldLand /> },
        { path: '/learn/charter', element: <Charter /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
