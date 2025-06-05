import useAxiosSecure from "./useAxiosSecure";

const useBookingsApi = () => {
  const axiosSecure = useAxiosSecure();
  const myBookingsPromise = (email) => {
    return axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/bookings?email=${email}`)
      .then((res) => res.data);
  };
  return { myBookingsPromise };
};

export default useBookingsApi;
