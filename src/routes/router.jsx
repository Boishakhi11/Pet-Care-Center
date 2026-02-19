import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Services from "../pages/Services";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import Error from "../components/Error";
import Loading from "../components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    loader: () => fetch("/vets.json"),
    hydrateFallbackElement: <Loading></Loading>,
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
    loader: () => fetch("/serviceCategories.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },

  {
    path: "/profile",
    Component: MyProfile,
  },
  {
    path: "/*",
    Component: Error,
  },
]);

export default router;
