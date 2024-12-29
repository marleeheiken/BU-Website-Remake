import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './screens/HomePage';
import Academics from './screens/Academics'
import Admissions from './screens/Admissions'
import Athletics from './screens/Athletics'
import BeaconLife from './screens/BeaconLife';
import About from './screens/About'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rt = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  
  {
    path: "academics",
    element: <Academics/>,
  },

  {
    path: "admissions",
    element: <Admissions/>,
  },

  {
    path: "athletics",
    element: <Athletics/>,
  },

  {
    path: "beacon-life",
    element: <BeaconLife/>,
  },

  {
    path: "about",
    element: <About/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rt} />
  </React.StrictMode>
);
