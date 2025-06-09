import React, { Suspense, useState } from "react";
import MyBookingsTable from "../../components/booking/MyBookingsTable";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/ui/Spinner";
import MyBookingsCard from "../../components/booking/MyBookingsCard";
import { FaThLarge, FaTable } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import useBookingsApi from "../../hooks/useBookingsApi";

const MyBookings = () => {
  const { myBookingsPromise } = useBookingsApi();
  const { user } = useAuth();
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <title>My Bookings | Athletic Hub</title>
      <Slide triggerOnce direction="left" delay={300} duration={1000}>
        <h2 className="text-center text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
          My <span className="text-secondary">Bookings</span>
        </h2>
      </Slide>
      <Slide triggerOnce direction="right" delay={300} duration={1000}>
        <p className="text-accent mb-6 max-w-2xl mx-auto text-center">
          View, manage, and keep track of all your event bookings in one
          convenient and organized place.
        </p>
      </Slide>

      <div className="flex justify-center mb-10 gap-4">
        <button
          onClick={() => setToggle(true)}
          className={`btn btn-sm flex items-center gap-2 px-4 py-2 rounded shadow-sm transition-all duration-200 ${
            toggle
              ? "btn-primary text-white"
              : "btn-ghost border border-primary/20"
          }`}
          aria-label="Table View"
        >
          <FaTable size={18} />
          <span className="hidden sm:inline">Table View</span>
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`btn btn-sm flex items-center gap-2 px-4 py-2 rounded shadow-sm transition-all duration-200 ${
            !toggle
              ? "btn-primary text-white"
              : "btn-ghost border border-primary/20"
          }`}
          aria-label="Card View"
        >
          <FaThLarge size={18} />
          <span className="hidden sm:inline">Card View</span>
        </button>
      </div>

      <Suspense fallback={<Spinner />}>
        {toggle ? (
          <MyBookingsTable myBookingsPromise={myBookingsPromise(user?.email)} />
        ) : (
          <MyBookingsCard myBookingsPromise={myBookingsPromise(user?.email)} />
        )}
      </Suspense>
    </div>
  );
};

export default MyBookings;
