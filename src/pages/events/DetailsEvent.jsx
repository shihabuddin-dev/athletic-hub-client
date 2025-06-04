import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsEvent = () => {
    const event=useLoaderData()
    console.log(event) 
    return (
        <div>
                aa
        </div>
    );
};

export default DetailsEvent;