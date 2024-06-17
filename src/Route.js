import { createBrowserRouter } from "react-router-dom";

import NavBar from "components/nav/NavBar";
import Main from "pages/Main";
import ScrollOverlay from "pages/ScrollOverlay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/scroll-overlay",
        element: <ScrollOverlay />,
      },
    ],
  },
]);

export default router;
