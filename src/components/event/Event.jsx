import React from 'react';

const Event = ({event}) => {
    console.log(event)
    return (
        <div>
            <p>{event.eventName}</p>
        </div>
    );
};

export default Event;