import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";

import AllStatesPage from "./pages/AllStatesPage.tsx";
import Homepage from "./pages/Homepage.tsx";
import StatePage from "./pages/StatePage.tsx";
import CityPage from "./pages/CityPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      {
        path: "/state/:stateCode",
        element: <StatePage />,
      },
      {
        path: "/city/:stateCode/:villeNom",
        element: <CityPage />,
      },
      {
        path: "allstates",
        element: <AllStatesPage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
