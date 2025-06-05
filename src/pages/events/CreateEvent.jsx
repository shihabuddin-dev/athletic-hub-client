import React, { Suspense, useState } from "react";
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
import { myEventsPromise } from "../../api/myEventsPromise";
import Spinner from "../../components/ui/Spinner";
import MyEventsTable from "../../components/event/MyEventsTable";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const inputBase =
  "w-full border-2 border-base-content/20 px-4 py-1.5 md:py-2 rounded-md focus:outline-none focus:border-secondary transition duration-200 bg-base-100 text-base-content";

const eventTypes = [
  "Football",
  "Cricket",
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
  const { user } = useAuth();
  const [form, setForm] = useState({
    eventName: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    location: "",
    participantLimit: "",
    difficulty: "",
    highlights: "",
    description: "",
    eventImage: "",
    creatorName: user?.displayName,
    creatorEmail: user?.email,
    creatorPhoto: user?.photoURL,
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
      setForm({
        eventName: "",
        eventType: "",
        eventDate: "",
        description: "",
        eventImage: "",
      });
    }, 1000);
  };

  // disabled yesterday or past date for add new event
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const minDate = `${yyyy}-${mm}-${dd}`;

  // Helper to parse 'h:mm aa' (e.g., '10:30 AM') to a Date object on 1970-01-01
  function parseTimeStringToDate(timeString) {
    if (!timeString) return null;
    const [time, modifier] = timeString.split(" ");
    if (!time || !modifier) return null;
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier.toLowerCase() === "pm" && hours !== 12) hours += 12;
    if (modifier.toLowerCase() === "am" && hours === 12) hours = 0;
    const date = new Date(1970, 0, 1, hours, minutes);
    return date;
  }

  return (
    <div className="space-y-8">
      <title>Create Event | Athletic Hub</title>
      <div className="max-w-4xl mx-auto mt-10 p-8 bg-base-100 rounded border-2 border-secondary">
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
              max={`${yyyy + 1}-12-31`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaClock className="text-secondary" /> Event Time
            </label>
            <DatePicker
              selected={parseTimeStringToDate(form.eventTime)}
              onChange={(date) => {
                const timeString = date
                  ? date.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : "";
                setForm((prev) => ({ ...prev, eventTime: timeString }));
              }}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              timeCaption="Time"
              dateFormat="h:mm aa"
              className={inputBase}
              placeholderText="Select time"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaMapMarkerAlt className="text-secondary" /> Location
            </label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className={inputBase}
              placeholder="e.g. Hatirjheel, Dhaka"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaUsers className="text-secondary" /> Participant Limit
            </label>
            <input
              type="number"
              name="participantLimit"
              value={form.participantLimit}
              onChange={handleChange}
              className={inputBase}
              placeholder="e.g. 500"
              min={1}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaTrophy className="text-secondary" /> Difficulty
            </label>
            <select
              name="difficulty"
              value={form.difficulty}
              onChange={handleChange}
              className={inputBase}
              required
            >
              <option value="">Select difficulty</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaImage className="text-secondary" /> Event Image URL
            </label>
            <input
              type="url"
              name="eventImage"
              value={form.eventImage}
              onChange={handleChange}
              className={inputBase}
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label className="font-medium text-base-content flex items-center gap-2">
              <FaStar className="text-secondary" /> Highlights
            </label>
            <input
              type="text"
              name="highlights"
              value={form.highlights}
              onChange={handleChange}
              className={inputBase}
              placeholder="e.g. Free T-shirt & Medal for all runners"
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
                inputBase +
                " bg-base-200 text-base-content/70 cursor-not-allowed"
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
                inputBase +
                " bg-base-200 text-base-content/70 cursor-not-allowed"
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
      <div className="mt-20">
        <Slide direction="left" delay={300} duration={1000}>
          <h2 className="text-center text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2">
            My <span className="text-secondary">Created</span> Events
          </h2>
        </Slide>
        <Slide direction="right" delay={300} duration={1000}>
          <p className="text-accent mb-8 max-w-2xl mx-auto text-center">
            Effortlessly view, manage, and track all the events you have created
            in one convenient place.
          </p>
        </Slide>
        <Suspense fallback={<Spinner />}>
          <MyEventsTable myEventsPromise={myEventsPromise(user.email)} />
        </Suspense>
      </div>
    </div>
  );
};

export default CreateEvent;
