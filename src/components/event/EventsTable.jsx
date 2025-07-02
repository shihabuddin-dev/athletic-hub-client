import React from "react";
import { Link } from "react-router";

const EventsTable = ({ events }) => {
  return (
    <div className="overflow-x-auto rounded shadow bg-base-100">
      <table className="min-w-full divide-y divide-base-200">
        <thead className="bg-base-200">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Image</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Type</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Date</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Time</th>
            
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Limit</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-base-content uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-base-200">
          {events.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-6 text-base-content/60">
                No events found.
              </td>
            </tr>
          ) : (
            events.map(event => (
              <tr key={event._id} className="hover:bg-base-200/40 transition">
                <td className="px-4 py-2 font-semibold text-primary whitespace-nowrap"><img src={event.eventImage} alt="" className="w-12 h-10 object-cover rounded" title={event.eventName} /></td>
                <td className="px-4 py-2 text-base-content/80 whitespace-nowrap">{event.eventType}</td>
                <td className="px-4 py-2 text-base-content/80 whitespace-nowrap">{new Date(event.eventDate).toLocaleDateString()}</td>
                <td className="px-4 py-2 text-base-content/80 whitespace-nowrap">{event.eventTime}</td>
              
                <td className="px-4 py-2 text-base-content/80 whitespace-nowrap">{event.participantLimit}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                    <Link to={`/events/${event._id}`}>
                      <button className="btn btn-xs btn-outline btn-primary">Details</button>
                    </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable; 