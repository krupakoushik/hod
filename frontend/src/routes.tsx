import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayouts";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      
      {
        path: "*",
        element: <NotFoundPage />,
      }
      
    ],
  },
]);
