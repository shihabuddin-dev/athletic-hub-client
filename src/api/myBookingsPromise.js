import axios from "axios";

export const myBookingsPromise = (email) => {
  return axios(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`).then(
    (res) => res.data
  );
};
