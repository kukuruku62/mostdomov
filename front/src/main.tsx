import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
import "normalize.css"
import "../src/styles/main.scss"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Root } from './Root/Root.tsx';
import { ErrorPage } from './pages/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <div>dsfsdf</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
