import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/ui/Button";
import {
  FaCalendarAlt,
  FaImage,
  FaUser,
  FaEnvelope,
  FaListAlt,
  FaRegEdit,
} from "react-icons/fa";
import { MdAddToPhotos, MdEventAvailable } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const inputBase =
  "w-full border-2 border-base-content/20 px-4 py-1.5 md:py-2 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content";

const eventTypes = [
  "Swimming",
  "Sprinting",
  "Long Jump",
  "High Jump",
  "Hurdle Race",
  "Relay",
  "Marathon",
  "Shot Put",
  "Discus Throw",
  "Javelin Throw",
];

const CreateEvent = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [form, setForm] = useState({
    eventName: "",
    eventType: "",
    eventDate: "",
    description: "",
    imageUrl: "",
    userName: user?.displayName,
    userEmail: user?.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/events`, form)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    console.log(form);
    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Event created successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/events");
      //   setForm({
      //     eventName: "",
      //     eventType: "",
      //     eventDate: "",
      //     description: "",
      //     imageUrl: "",
      //   });
    }, 1000);
  };

  // disabled yesterday or past date for add new event
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-base-100 rounded border-2 border-secondary">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center flex items-center justify-center gap-2">
        <MdAddToPhotos className="text-secondary text-3xl" />
        <span>Create Event</span>
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <MdEventAvailable className="text-secondary text-lg" /> Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={form.eventName}
            onChange={handleChange}
            className={inputBase}
            placeholder="Enter event name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaListAlt className="text-secondary" /> Event Type
          </label>
          <select
            name="eventType"
            value={form.eventType}
            onChange={handleChange}
            className={inputBase}
            required
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaCalendarAlt className="text-secondary" /> Event Date
          </label>
          <input
            type="date"
            name="eventDate"
            value={form.eventDate}
            onChange={handleChange}
            className={inputBase}
            required
            min={minDate}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaImage className="text-secondary" /> Event Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className={inputBase}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaRegEdit className="text-secondary" /> Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className={inputBase}
            rows={3}
            placeholder="Describe the event"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaEnvelope className="text-secondary" /> Creator Email
          </label>
          <input
            type="email"
            value={user?.email || ""}
            disabled
            className={
              inputBase + " bg-base-200 text-base-content/70 cursor-not-allowed"
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-base-content flex items-center gap-2">
            <FaUser className="text-secondary" /> Creator Name
          </label>
          <input
            type="text"
            value={user?.displayName || ""}
            disabled
            className={
              inputBase + " bg-base-200 text-base-content/70 cursor-not-allowed"
            }
          />
        </div>
        <div className="md:col-span-2">
          <Button type="submit" className="w-full">
            Create Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
