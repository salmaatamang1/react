import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Rwaste from "./pages/3Rwaste/3Rwaste";
import GHero from "./pages/GHero/GHero";
import About from "./pages/about/About";
//import Navbar from "./components/Navbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Layout from "./components/Layout";
import Cform from './pages/cform/Cform';
import Osm from './pages/osm/Osm';
import Naghome from './pages/Naghome/NagHome'
import Username from './forms/Username';
import Password from './forms/Password';
import Ghome from './pages/Ghome/Ghome';
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/about",
         element: <About /> },
        {
          path: "/3Rwaste" ,
          element:<Rwaste />
        },
        {
          path: "/ghero" ,
          element:<GHero />
        },
        {
          path: "/login" ,
          element:<Login />
        },
        {
          path: "/register" ,
          element:<Register />
        },
      ],
    },
    {
      path: "/cform" ,
      element:<Cform />
    },
    {
      path: "/osm" ,
      element:<Osm />
    },
    {
      path: "/naghome" ,
      element:<Naghome />
    },
    {
      path: "/changeusername" ,
      element:<Username />
    },
    {
      path: "/changepassword" ,
      element:<Password />
    },
    {
      path: "/ghome" ,
      element:<Ghome />
    },
   
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;
