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
import MyBookings from "../pages/myBookings/MyBookings";
import HowItWorks from "../pages/static/HowItWorks";
import FAQs from "../pages/static/FAQs";
import Support from "../pages/static/Support";
import Blog from "../pages/static/Blog";
import TermsAndConditions from "../pages/static/TermsAndConditions";

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

      // static pages
      { path: "/blog", Component: Blog },
      { path: "/faq", Component: FAQs },
      { path: "/support", Component: Support },
      { path: "/howItWorks", Component: HowItWorks },
      { path: "/terms&Conditions", Component: TermsAndConditions },

      // private routes Protected
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
      {
        path: "/events/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
        element: (
          <PrivateRoutes>
            <DetailsEvent />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateEvent/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
        element: (
          <PrivateRoutes>
            <UpdateEvent />
          </PrivateRoutes>
        ),
      },

      // **Bookings**
      {
        path: "/myBookings",
        element: (
          <PrivateRoutes>
            <MyBookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
