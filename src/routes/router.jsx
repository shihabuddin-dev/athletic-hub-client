import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import MyProfile from "../pages/myprofile/MyProfile";
import PrivateRoutes from "./PrivateRoutes";
import NotFound from "../pages/notFound/NotFound";
import CreateEvent from "../pages/events/CreateEvent";
import Events from "../pages/events/Events";
import DetailsEvent from "../pages/events/DetailsEvent";
import UpdateEvent from "../pages/events/UpdateEvent";
import ManageEvents from "../pages/events/ManageEvents";
import Spinner from "../components/ui/Spinner";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/events/featured`),
        Component: Home,
      },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "/reset-password", Component: ResetPassword },
      { path: "/events", Component: Events },

      {
        path: "/events/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
        Component: DetailsEvent,
      },
      {
        path: "/updateEvent/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
        Component: UpdateEvent,
      },
      // { path: '/blogs', Component: spi },

      //  loader: () => fetch(`${import.meta.env.VITE_API_URL}/events`),

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
      {
        path: "/manageEvents",
        element: (
          <PrivateRoutes>
            <ManageEvents />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
