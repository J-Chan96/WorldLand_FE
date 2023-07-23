import Main from 'pages/Main';
import Learn from 'pages/Learn';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from 'components/Header';

const MainRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = () => {
  const router = createBrowserRouter([
    { path: '/', element: <MainRoot />, children: [{ index: true, element: <Main /> }] },
    {
      path: '/',
      element: <MainRoot />,
      children: [
        { index: true, element: <Main /> },
        { path: '/learn', element: <Learn /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
