import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Favicon from "react-favicon";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ProjectDetails from "./scenes/ProjectDetail.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/details/:id",
    loader: () => fetch("/data.json"),
    element: <ProjectDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div className="font-Ovo">
    <Favicon url="https://i.ibb.co/Pxf1xtZ/psd-smiling-3d-receptionist-isolated-transparent-background-753500-460-removebg-preview.png" />
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </div>
);
