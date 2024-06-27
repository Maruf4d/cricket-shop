import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../componentes/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Home/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import PrivetRoute from "./PrivetRoute/PrivetRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: 'menu',
          element: <PrivetRoute>
            <Menu/>
          </PrivetRoute>,
        },
        {
          path: 'order/:category',
          element: <Order/>,
        },
        {
          path: 'login',
          element: <Login/>,
        },
        {
          path: 'singUp',
          element: <SingUp/>,
        },
      ]
    },
  ]);