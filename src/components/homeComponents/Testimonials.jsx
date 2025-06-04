import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Ayesha Rahman",
    role: "Marathon Runner",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "Athletic Hub made it so easy to find and join local sports events! The booking process is smooth and the community is amazing.",
    rating: 5,
  },
  {
    name: "Tanvir Hasan",
    role: "Football Player",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "I love the variety of events and the user-friendly interface. I met so many new friends through this platform!",
    rating: 4,
  },
  {
    name: "Priya Sarker",
    role: "Swimmer",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "The best place to discover and book sports events in my city. Highly recommended for all sports lovers!",
    rating: 5,
  },
  {
    name: "Frank Klin",
    role: "Cyclist",
    photo: "https://i.pravatar.cc/100?img=11",
    quote:
      "I found my cycling group through Athletic Hub and now ride every weekend! The platform is a game changer.",
    rating: 5,
  },
  {
    name: "Linda Ann",
    role: "Basketball Coach",
    photo: "https://i.pravatar.cc/100?img=12",
    quote:
      "Managing and promoting my basketball events has never been easier. The dashboard is intuitive and powerful.",
    rating: 4,
  },
  {
    name: "David Gueta",
    role: "Student Athlete",
    photo: "https://i.pravatar.cc/100?img=13",
    quote:
      "I joined my first marathon thanks to Athletic Hub. The event details and booking were super clear!",
    rating: 5,
  },
  {
    name: "Soda Lanna",
    role: "Tennis Player",
    photo: "https://i.pravatar.cc/100?img=14",
    quote:
      "Great for finding tennis partners and tournaments. I love the community feel!",
    rating: 4,
  },
  {
    name: "John Mark",
    role: "Designer & Runner",
    photo: "https://i.pravatar.cc/100?img=15",
    quote:
      "The event reminders and booking confirmations are so helpful. I never miss a race now!",
    rating: 5,
  },
  {
    name: "Jessica Lee",
    role: "Medical Student",
    photo: "https://i.pravatar.cc/100?img=18",
    quote:
      "I feel safe joining events as a solo female athlete. The reviews and ratings are a great feature.",
    rating: 4,
  },
  {
    name: "David Wilson",
    role: "Artist & Swimmer",
    photo: "https://i.pravatar.cc/100?img=17",
    quote:
      "I discovered new swimming spots and made friends through Athletic Hub. Highly recommended!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 text-center">
      <Slide direction="left" delay={300} duration={1000}>
        <h2 className="text-3xl text-primary md:text-4xl font-semibold mb-2">
          What Our <span className="text-secondary">Users Say</span>
        </h2>
      </Slide>
      <Slide direction="right" delay={300} duration={1000}>
        <p className="text-accent mb-12 max-w-2xl mx-auto">
          Hear directly from our happy users who found the perfect event or
          community through Athletic Hub. Real stories, real experiences!
        </p>
      </Slide>
      <Fade direction="down">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-64 bg-gradient-to-br from-secondary/10 via-base-100 to-secondary/8 p-5 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between items-center duration-500 transition-transform hover:scale-105 hover:rounded-xl border border-base-300 pb-10">
                <div className="flex flex-col items-center">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-16 h-16 rounded-full border-4 border-secondary shadow-md mb-2 object-cover"
                  />
                  <h3 className="mt-1 text-lg font-semibold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-secondary text-xs font-medium mb-1">
                    {item.role}
                  </p>
                  <div className="flex justify-center mb-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
                <p className="italic text-accent text-xs px-2 mt-2 line-clamp-4">
                  “{item.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fade>
    </div>
  );
};

export default Testimonials;
