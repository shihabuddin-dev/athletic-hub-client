import useAxiosSecure from "./useAxiosSecure";

const useEventsApi = () => {
  const axiosSecure = useAxiosSecure();

  const myEventsPromise = (email) => {
    return axiosSecure
      .get(`${import.meta.env.VITE_API_URL}/events?email=${email}`)
      .then((res) => res.data);
  };

  // getting event data by id
  // const myEventPromiseById = (id) => {
  //   return axiosSecure
  //     .get(`${import.meta.env.VITE_API_URL}/events/${id}`)
  //     .then((res) => res.data);
  // };
  return { myEventsPromise };
};

export default useEventsApi;
