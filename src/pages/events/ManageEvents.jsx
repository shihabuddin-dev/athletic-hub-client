import React, { Suspense } from "react";
import { myEventsPromise } from "../../api/myEventsPromise";
import Spinner from "../../components/ui/Spinner";
import useAuth from "../../hooks/useAuth";
import MyEventsTable from "../../components/event/MyEventsTable";
import { Slide } from "react-awesome-reveal";

const ManageEvents = () => {
  const { user } = useAuth();
  return (
    <div>
      <title>Manage Events | Athletic Hub</title>
      <Slide direction="left" delay={300} duration={1000}>
        <h2 className="text-center text-3xl text-primary md:text-4xl font-semibold mb-2">
          Manage <span className="text-secondary">Your Own</span> Events
        </h2>
      </Slide>
      <Slide direction="right" delay={300} duration={1000}>
        <p className="text-accent mb-10 max-w-2xl mx-auto text-center">
          Effortlessly manage, update, and track all your created events in one
          convenient place here.
        </p>
      </Slide>
      <Suspense fallback={<Spinner />}>
        <MyEventsTable myEventsPromise={myEventsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default ManageEvents;
