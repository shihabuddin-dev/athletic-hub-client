import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import MyProfile from "../pages/myprofile/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/notFound/NotFound";
import CreateEvent from "../pages/createEvent/CreateEvent";
import Events from "../pages/events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "/reset-password", Component: ResetPassword },
      { path: "/events", Component: Events },
      // { path: '/blogs', Component: spi },

      //  loader: () => fetch(`${import.meta.env.VITE_API_URL}/recipes`),

      // private routes
      {
        path: "/my-profile",
        element: (
          <PrivateRoutes>
            <MyProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/create-event",
        element: (
          <PrivateRoutes>
            <CreateEvent />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
