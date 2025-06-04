import { NavLink, Link } from "react-router";
import { useState } from "react";
import {
  FaAddressBook,
  FaBars,
  FaHome,
  FaRegArrowAltCircleDown,
  FaRegUserCircle,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";
import Button from "../ui/Button";
import Swal from "sweetalert2";
import {
  MdAddBusiness,
  MdAssignmentAdd,
  MdEvent,
  MdManageHistory,
} from "react-icons/md";
import ThemeToggle from "../ui/ThemeToggle";
import userLogo from "../../assets/user-logo.png";
import athleticLogo from "../../assets/athletic-logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // logout user
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser();
        Swal.fire({
          title: "Sign out!",
          text: "You have been Sign out.",
          icon: "success",
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Sign failed.",
              icon: "error",
            });
          });
      }
    });
  };

  const linksClass =
    "hover:text-primary text-base-content flex items-center gap-1";

  const ProfilePrivateLink = (
    <div className="relative">
      <button
        onClick={() => setShowMobileProfile((prev) => !prev)}
        className="hover:text-primary text-base-content flex items-center gap-1 cursor-pointer lg:hidden "
        aria-expanded={showMobileProfile}
        aria-controls="mobile-profile-dropdown"
      >
        <FaRegArrowAltCircleDown /> Profile
      </button>
      <ul
        className={`dropdown menu w-52 rounded-box bg-base-100 shadow-sm absolute left-0 mt-2 z-50 border border-secondary ${
          showMobileProfile ? "block" : "hidden"
        } lg:hidden`}
        id="mobile-profile-dropdown"
      >
        <li>
          <NavLink
            to="/bookEvent"
            onClick={() => setShowMobileProfile(false)}
            className={linksClass}
          >
            <MdAssignmentAdd />
            Book Event
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myBookings"
            onClick={() => setShowMobileProfile(false)}
            className={linksClass}
          >
            <FaAddressBook />
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manageEvents"
            onClick={() => setShowMobileProfile(false)}
            className={linksClass}
          >
            <MdManageHistory />
            Manage Events
          </NavLink>
        </li>
      </ul>
      {/* Desktop version (popover/hover) */}
      <button
        onClick={() => setShowMobileProfile((prev) => !prev)}
        popoverTarget="popover-1"
        className="hover:text-primary text-base-content hidden lg:flex items-center gap-1 cursor-pointer"
        style={{ anchorName: "--anchor-1" }}
      >
        <FaRegArrowAltCircleDown /> Profile
      </button>
      <ul
        className={`dropdown menu w-52 rounded-box bg-base-100 shadow-sm absolute left-0 mt-2 z-50 border border-secondary ${
          showMobileProfile ? "block" : "hidden"
        } `}
        id="popover-1"
        style={{ positionAnchor: "--anchor-1" }}
      >
        <li>
          <NavLink
            to="/bookEvent"
            className={linksClass}
            onClick={() => setShowMobileProfile(false)}
          >
            <MdAssignmentAdd />
            Book Event
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/myBookings"
            className={linksClass}
            onClick={() => setShowMobileProfile(false)}
          >
            <FaAddressBook />
            My Bookings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manageEvents"
            className={linksClass}
            onClick={() => setShowMobileProfile(false)}
          >
            <MdManageHistory />
            Manage Events
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className="bg-gradient-to-t from-secondary/8 via-base-100 to-secondary/8 fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-secondary/15">
      <div className="max-w-7xl mx-auto py-2 px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1">
          <img
            src={athleticLogo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />
          <p className="text-2xl font-bold text-secondary">Athletic Hub</p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-5 font-semibold text-white">
          <li>
            <NavLink to="/" className={linksClass}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={linksClass}>
              <MdEvent />
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/create-event" className={linksClass}>
              <MdAddBusiness />
              Create Event
            </NavLink>
          </li>

          {user && <li>{ProfilePrivateLink}</li>}
        </ul>

        {/* Login / Avatar */}
        <div className="hidden space-x-2 lg:flex items-center">
          {user && (
            <Button onClick={handleLogOut} variant="danger">
              Sign Out
            </Button>
          )}
          {user ? (
            <div className="relative z-10">
              <div className="cursor-pointer group/avatar">
                <img
                  src={user?.photoURL ? user?.photoURL : userLogo}
                  alt="profile"
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full border-secondary"
                />
                <div
                  className="absolute -left-15  mt-0 w-40 bg-base-100 border border-secondary rounded-md shadow-lg transition-opacity duration-200 opacity-0 invisible group-hover/avatar:opacity-100 group-hover/avatar:visible"
                  style={{ pointerEvents: "auto" }}
                >
                  <p className="px-4 py-2 text-sm font-medium text-secondary">
                    Hi, {user?.displayName}
                  </p>
                  <hr className="text-secondary border-dashed" />
                  <Link to="/my-profile">
                    <p className="px-4 py-2 text-sm flex items-center gap-2 font-medium text-secondary">
                      {" "}
                      <FaRegUserCircle /> My Profile
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Link to="/signin">
                <Button className="border-none">Sign In</Button>
              </Link>
              {/* <Link to="/signup">
                <Button>Sign Up</Button>
              </Link> */}
            </>
          )}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[56px] z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
        style={{ minHeight: isOpen ? "calc(100vh - 72px)" : 0 }}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-2 pb-4 bg-base-100 border-b border-base-300 shadow-lg rounded-b-xl">
          <ul className="flex flex-col gap-4 font-semibold text-[#1a1a1a]">
            <li>
              <NavLink to="/" onClick={toggleMenu} className={linksClass}>
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={toggleMenu} className={linksClass}>
                <MdEvent />
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-event"
                onClick={toggleMenu}
                className={linksClass}
              >
                <MdAddBusiness />
                Create Event
              </NavLink>
            </li>

            {user && <li>{ProfilePrivateLink}</li>}
            <li className="space-x-2">
              {user ? (
                <div className="flex gap-4 items-center">
                  <img
                    src={user?.photoURL ? user?.photoURL : ""}
                    alt="profile"
                    className="w-9 h-9 rounded-full border border-secondary"
                  />
                  <div>
                    <p className="text-sm text-secondary font-medium ">
                      <Link
                        onClick={toggleMenu}
                        to="/my-profile"
                        className="flex gap-1 items-center"
                      >
                        <FaRegUserCircle /> {user?.displayName} Profile
                      </Link>
                    </p>
                    <button
                      onClick={handleLogOut}
                      className="flex items-center gap-2 text-sm text-secondary w-full"
                    >
                      <FaSignOutAlt /> Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/signin" onClick={toggleMenu}>
                    <Button variant="outline">Sign In</Button>
                  </Link>
                  {/* <Link to="/signup" onClick={toggleMenu}>
                    <Button>Sign Up</Button>
                  </Link> */}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
