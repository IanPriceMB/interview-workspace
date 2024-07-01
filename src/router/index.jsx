import React from 'react';
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Others from '../Containers/Others';
import Home from '../Containers/Home';
import Other from '../Containers/Other';
import { Counter } from '../Containers/Counter';

export default createBrowserRouter([
  {
    element: <div>
      <nav>
        <Link to='other'>other</Link>
        <Link to='other/1'>other 1</Link>
        <Link to='counter'>counter</Link>
      </nav>
      <Outlet/>
    </div>,
    children: [
      {
        path: "other",
        element: <Others />,
      },
      {
        path: 'other/:id',
        element: <Other />
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ]
  },
  {
    path: '/',
    errorElement: <div>error</div>
  }
]);