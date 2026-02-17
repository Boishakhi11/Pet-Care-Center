import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Services from "../pages/Services";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/sigup",
        Component: Register,
      },
    ],
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/profile",
    Component: MyProfile,
  },
  {
    path: "/*",
    element: <h1>Error Page</h1>,
  },
]);

export default router;
