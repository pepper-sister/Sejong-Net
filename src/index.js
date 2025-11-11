import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import AllWebsites from "./pages/AllWebsites";
import Facilities from "./pages/Facilities";

const pages = [
  { path: "/", element: <Home /> },
  { path: "/allwebsites", element: <AllWebsites /> },
  { path: "/facilities", element: <Facilities /> },
];
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: pages,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
