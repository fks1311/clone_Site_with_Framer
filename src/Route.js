import { createBrowserRouter } from "react-router-dom";

import NavBar from "global/NavBar";
import Home from "global/Home";
import ScrollOverlay from "products/scroll-overlay/ScrollOverlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/scroll-overlay",
        element: <ScrollOverlay />,
      },
    ],
  },
]);

export default router;
