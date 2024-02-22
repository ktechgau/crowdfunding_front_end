import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./components/index.css";
import { AuthProvider } from "./components/AuthProvider.jsx";

import HomePage from './pages/HomePage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';
import NavBar from './components/Nav/NavBar.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HowPage from './pages/HowPage.jsx';
import AllProjectsPage from './pages/AllProjectsPage.jsx';
import NewProjectPage from './pages/NewProjectPage.jsx';
import PledgePage from './pages/PledgePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",element:<NavBar/>,
  children: [
    {path:"/", element:<HomePage/>},
    {path:"/projects", element:<AllProjectsPage/>},
    {path:"/project/:id/pledge", element:<PledgePage/>},
    {path:"/ask", element:<NewProjectPage/>},
    {path:"/how", element:<HowPage/>},
    {path:"/login", element: <LoginPage />},
    {path:"/project/:id", element:<ProjectPage/>},
  ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
);
