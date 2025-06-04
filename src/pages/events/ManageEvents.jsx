import React, { Suspense } from "react";
import { myEventsPromise } from "../../api/myEventsPromise";
import Spinner from "../../components/ui/Spinner";
import useAuth from "../../hooks/useAuth";
import MyEventsTable from "../../components/event/MyEventsTable";

const ManageEvents = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-center text-2xl text-primary md:text-3xl font-semibold mb-8">
        Manage <span className="text-secondary">Your Own</span> Events
      </h2>
      <Suspense fallback={<Spinner />}>
        <MyEventsTable myEventsPromise={myEventsPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default ManageEvents;
