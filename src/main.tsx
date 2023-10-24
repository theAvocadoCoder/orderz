import React from "react";
import ReactDOM from "react-dom/client";
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.tsx";
import _404 from "./global/404";
import Homepage from "./pages/Homepage";
// import ViewOrder from "./pages/ViewOrder";
// import EditOrder from "./pages/EditOrder";
import Settings from "./pages/Settings";
// import Welcome from "./pages/Welcome";
import InProgress from "./global/InProgress";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <_404 />,
    children: [
      {
        errorElement: null,
        children: [
          {
            path: "/",
            element: <Homepage />,
            children: [
              {
                index: true,
                element: (
                  <div className="full-center">No order selected</div>
                )
              },
              {
                path: "view",
                // element: <ViewOrder />,
                element: <InProgress />,
              },
              {
                path: "edit",
                // element: <EditOrder />,
                element: <InProgress />,
              },
              {
                path: "new",
                // element: <EditOrder />,
                element: <InProgress />,
              }
            ]
          },
          {
            path: "settings",
            element: <Settings />,
          }
        ]
      }
    ]
  },
  {
    path: "/welcome",
    // element: <Welcome />,
    element: <InProgress />,
    errorElement: <_404 />,
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
