import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Instagram from './Pages/Instagram.jsx';
import Mainlayout from './Layout/Mainlayout.jsx';
import Facebook from './Pages/Facebook.jsx';
import Linkedin from './Pages/Linkedin.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "instagram",
    element: <Instagram/>,
  },
  {
    path: "mainlayout",
    element: <Mainlayout/>,
  },
  {
    path: "facebook",
    element: <Facebook/>,
  },
  {
    path: "linkedin",
    element: <Linkedin/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
