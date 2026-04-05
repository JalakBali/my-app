import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Demo from "../pages/Demo";
import DemoApp1 from "../pages/DemoApp1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:slug", element: <BlogDetail /> },
      { path: "/demo", element: <Demo /> },
      { path: "/demo/app1", element: <DemoApp1 /> },
    ],
  },
]);