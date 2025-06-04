import axios from "axios";

export const myEventsPromise = (email) => {
  return axios(`${import.meta.env.VITE_API_URL}/events?email=${email}`).then(
    (res) => res.data
  );
};
