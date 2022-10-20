
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Profile from '../components/Profile';
import Wallet from '../components/Wallet';
import Login from '../components/Login';
import Register from '../components/Register';
import PriveteRoute from './PriveteRoute';
import HomeTwo from '../components/HomeTwo';

const router=createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            path:'/',
            element: <HomeTwo/>,
        },
        {
            path:'profile',
            element: <PriveteRoute><Profile/></PriveteRoute>,
        },
        {
            path:'wallet',
            element: <PriveteRoute><Wallet/></PriveteRoute>,
        },
        {
            path:'login',
            element: <Login/>,
        },
        {
            path:'register',
            element: <Register/>,
        },
      ],
    }
  ])

  export default router;