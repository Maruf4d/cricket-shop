import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../Pages/Home/Home";
import Menu from "../componentes/Menu/Menu";
import Order from "../Pages/Order/Order";


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
          element: <Menu/>,
        },
        {
          path: 'order/:category',
          element: <Order/>,
        }
      ]
    },
  ]);