import { NavLink, Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  FaAddressBook,
  FaBars,
  FaBlog,
  FaHome,
  FaQuestion,
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
  MdOutlinePermDeviceInformation,
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

  const profileRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowMobileProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // logout user
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5046E5",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser();
        Swal.fire({
          title: "Sign out!",
          text: "You have been signed out.",
          icon: "success",
        }).catch((error) => {
          console.log(error);
          Swal.fire({
            title: "Error!",
            text: "Sign out failed.",
            icon: "error",
          });
        });
      }
    });
  };

  const linksClass =
    "hover:text-primary text-base-content flex items-center gap-1";

  return (
    <nav className="backdrop-blur bg-gradient-to-t from-secondary/8 via-base-100 to-secondary/8 fixed top-0 left-0 right-0 z-50 w-full border-b-2 border-secondary/15">
      <div className="max-w-7xl mx-auto py-2 px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo & Website Name */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={athleticLogo}
            alt="Athletic Hub Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-secondary tracking-tight">
            Athletic Hub
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-5 font-semibold text-base-content items-center flex-1 justify-center">
          <li>
            <NavLink to="/" className={linksClass}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={linksClass}>
              <MdEvent /> Events
            </NavLink>
          </li>
         {user&& <li>
            <NavLink to="/create-event" className={linksClass}>
              <MdAddBusiness /> Create Event
            </NavLink>
          </li>}

          <li>
            <NavLink to="/blog" className={linksClass}>
              <FaBlog /> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linksClass}>
              <MdOutlinePermDeviceInformation /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" className={linksClass}>
              <FaQuestion /> FAQ
            </NavLink>
          </li>
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3 min-w-[180px] justify-end">
          <ThemeToggle />
          {!user && (
            <Link to="/signin">
              <Button className="border-none">Sign In</Button>
            </Link>
          )}
          {user && (
            <div className="relative" ref={profileRef}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                title={user?.displayName}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMobileProfile((prev) => !prev);
                }}
              >
                <img
                  src={user?.photoURL || userLogo}
                  alt="profile"
                  className="w-9 h-9 rounded-full ring-2 ring-primary object-cover"
                />
              </div>
              <ul
                className={`menu w-52 rounded shadow bg-base-100 absolute right-0 mt-2 z-50 border border-secondary transition-all duration-200 ${
                  showMobileProfile
                    ? "opacity-100 visible translate-y-0 pointer-events-auto"
                    : "opacity-0 invisible -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex justify-center items-center flex-col py-1 ">  
                  <img
                  src={user?.photoURL || userLogo}
                  alt="profile"
                  className="w-10 h-10 rounded-full ring-2 ring-primary object-cover"
                />
                <span className="text-secondary">Hi, {user?.displayName}</span>
                </div>
                <li>
                  <NavLink
                    to="/my-profile"
                    className={linksClass}
                    onClick={() => setShowMobileProfile(false)}
                  >
                    <FaRegUserCircle /> My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/bookEvent"
                    className={linksClass}
                    onClick={() => setShowMobileProfile(false)}
                  >
                    <MdAssignmentAdd /> Book Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myBookings"
                    className={linksClass}
                    onClick={() => setShowMobileProfile(false)}
                  >
                    <FaAddressBook /> My Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manageEvents"
                    className={linksClass}
                    onClick={() => setShowMobileProfile(false)}
                  >
                    <MdManageHistory /> Manage Events
                  </NavLink>
                </li>
                <li className="border-t border-base-200 mt-1 pt-1">
                  <button
                    onClick={() => {
                      handleLogOut();
                      setShowMobileProfile(false);
                    }}
                    className="flex items-center gap-2 text-error font-semibold w-full px-2 py-1"
                  >
                    <FaSignOutAlt /> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
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
        <div className="px-4 pt-2 pb-4 bg-base-100 border-b border-base-300 shadow-lg rounded-b-sm">
          <ul className="flex flex-col gap-4 font-semibold text-base-content">
            <li>
              <NavLink to="/" onClick={toggleMenu} className={linksClass}>
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={toggleMenu} className={linksClass}>
                <MdEvent /> Events
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/about" onClick={toggleMenu} className={linksClass}>
                <MdOutlinePermDeviceInformation /> About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={toggleMenu} className={linksClass}>
                <FaBlog /> Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" onClick={toggleMenu} className={linksClass}>
                <FaQuestion /> FAQ
              </NavLink>
            </li>
            {user && (
              <>
               <li>
              <NavLink
                to="/create-event"
                onClick={toggleMenu}
                className={linksClass}
              >
                <MdAddBusiness /> Create Event
              </NavLink>
            </li>
                <li>
                  <NavLink
                    to="/bookEvent"
                    onClick={toggleMenu}
                    className={linksClass}
                  >
                    <MdAssignmentAdd /> Book Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myBookings"
                    onClick={toggleMenu}
                    className={linksClass}
                  >
                    <FaAddressBook /> My Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manageEvents"
                    onClick={toggleMenu}
                    className={linksClass}
                  >
                    <MdManageHistory /> Manage Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-profile"
                    onClick={toggleMenu}
                    className={linksClass}
                  >
                    <FaRegUserCircle /> My Profile
                  </NavLink>
                </li>

                <li className="flex items-center gap-2 mt-2">
                  <img
                    src={user?.photoURL || userLogo}
                    alt="profile"
                    className="w-10 h-10 rounded-full border border-secondary"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-secondary font-medium">
                     Hi, {user?.displayName}
                    </span>
                    <button
                      onClick={() => {
                        handleLogOut();
                        toggleMenu();
                      }}
                      className="flex items-center gap-2 text-sm text-error font-semibold"
                    >
                      <FaSignOutAlt /> Sign Out
                    </button>
                  </div>
                </li>
              </>
            )}

            {!user && (
              <li>
                <Link to="/signin" onClick={toggleMenu}>
                  <Button variant="outline">Sign In</Button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
