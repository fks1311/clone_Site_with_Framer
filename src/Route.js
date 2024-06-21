import { createBrowserRouter } from "react-router-dom";

import NavBar from "global/NavBar";
import Home from "global/Home";
import ScrollOverlay from "products/scroll-overlay/ScrollOverlay";
import Mubasic from "products/mubasic/Mubasic";
import Zoom from "products/zoom/Zoom";
import SkewScroll from "products/skew-scroll/SkewScroll";

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
      {
        path: "/mubasic",
        element: <Mubasic />,
      },
      {
        path: "/zoom",
        element: <Zoom />,
      },
      {
        path: "/skew",
        element: <SkewScroll />,
      },
    ],
  },
]);

export default router;
