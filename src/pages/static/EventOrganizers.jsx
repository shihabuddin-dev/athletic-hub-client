import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiUsers, FiStar, FiMail, FiCheckCircle } from "react-icons/fi";

const organizers = [
  {
    name: "Anisur Rahman",
    photo: "https://i.pravatar.cc/100?img=15",
    email: "anisur.rahman@email.com",
    events: 8,
    rating: 4.8,
    bio: "Anisur brings a creative spark to every event, playful competitions that encourage young athletes strengths and build confidence on and off the field.",
  },
  {
    name: "Coach Riley",
    photo: "https://i.pravatar.cc/100?img=16",
    email: "coach.riley@email.com",
    events: 15,
    rating: 5.0,
    bio: "Riley’s events are known for their energy and precision, blending years of coaching wisdom with a passion for helping every participant reach their personal best.",
  },
  {
    name: "Samantha Lee",
    photo: "https://i.pravatar.cc/100?img=17",
    email: "samantha.lee@email.com",
    events: 10,
    rating: 4.7,
    bio: "Samantha champions diversity in sports, curating inclusive tournaments that celebrate teamwork, resilience, and the unique stories of every athlete.",
  },
  {
    name: "Alex Kim",
    photo: "https://i.pravatar.cc/100?img=18",
    email: "alex.kim@email.com",
    events: 9,
    rating: 4.6,
    bio: "Alex inspires future stars by creating safe, supportive spaces where young players can experiment, learn, and grow through friendly competition.",
  },
  {
    name: "Priya Singh",
    photo: "https://i.pravatar.cc/100?img=19",
    email: "priya.singh@email.com",
    events: 11,
    rating: 4.8,
    bio: "Priya’s leadership shines in her ability to unite neighborhoods, transforming local parks into vibrant hubs of athletic excitement and community spirit.",
  },
  {
    name: "David Chen",
    photo: "https://i.pravatar.cc/100?img=20",
    email: "david.chen@email.com",
    events: 13,
    rating: 4.9,
    bio: "David’s strategic approach to event planning ensures every detail is covered, making each tournament a seamless and memorable experience for all involved.",
  },
  {
    name: "Maria Gomez",
    photo: "https://i.pravatar.cc/100?img=21",
    email: "maria.gomez@email.com",
    events: 7,
    rating: 4.7,
    bio: "Maria’s events are a celebration of togetherness, where families and friends gather to cheer, compete, and create lasting memories in a festive atmosphere.",
  },
  {
    name: "Omar Faruk",
    photo: "https://i.pravatar.cc/100?img=22",
    email: "omar.faruk@email.com",
    events: 12,
    rating: 4.8,
    bio: "Omar is dedicated to breaking down barriers in sports, ensuring that every event is accessible, enjoyable, and meaningful for participants of all backgrounds.",
  },
  {
    name: "Emily Carter",
    photo: "https://i.pravatar.cc/100?img=23",
    email: "emily.carter@email.com",
    events: 14,
    rating: 4.9,
    bio: "Emily’s focus on wellness and empowerment is reflected in her events, which blend athletic challenge with encouragement and positive community impact.",
  },
  {
    name: "Liam Patel",
    photo: "https://i.pravatar.cc/100?img=24",
    email: "liam.patel@email.com",
    events: 8,
    rating: 4.7,
    bio: "Liam’s enthusiasm for fair play and sportsmanship sets the tone for his competitions, where every match is an opportunity for growth and friendship.",
  },
  {
    name: "Nina Rossi",
    photo: "https://i.pravatar.cc/100?img=25",
    email: "nina.rossi@email.com",
    events: 10,
    rating: 4.8,
    bio: "Nina’s inventive event formats and welcoming attitude make her tournaments a favorite among athletes seeking new challenges and supportive camaraderie.",
  },
  {
    name: "Lucas Silva",
    photo: "https://i.pravatar.cc/100?img=26",
    email: "lucas.silva@email.com",
    events: 11,
    rating: 4.7,
    bio: "Lucas excels at orchestrating both grand tournaments and intimate leagues, always ensuring that every player feels valued and inspired to excel.",
  },
  {
    name: "Fatima Zahra",
    photo: "https://i.pravatar.cc/100?img=27",
    email: "fatima.zahra@email.com",
    events: 9,
    rating: 4.8,
    bio: "Fatima’s mission is to uplift women and youth, using sports as a platform for empowerment, leadership, and lifelong friendships.",
  },
  {
    name: "Ethan Brown",
    photo: "https://i.pravatar.cc/100?img=28",
    email: "ethan.brown@email.com",
    events: 13,
    rating: 4.9,
    bio: "Ethan’s events are built on the values of teamwork, creating a positive environment where every participant feels like a champion.",
  },
  {
    name: "Sofia Ivanova",
    photo: "https://i.pravatar.cc/100?img=29",
    email: "sofia.ivanova@email.com",
    events: 7,
    rating: 4.6,
    bio: "Sofia brings a global perspective, weaving cultural exchange and international flair into every event she organizes.",
  },
  {
    name: "Nasrin Jahan",
    photo: "https://i.pravatar.cc/100?img=30",
    email: "nasrin.ali@email.com",
    events: 12,
    rating: 4.8,
    bio: "Nasrin’s passion for healthy competition is matched by his commitment to building bridges between communities through the joy of sports.",
  },
];

const EventOrganizers = () => {
  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4 md:px-6">
      <Fade direction="up">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <div className="bg-gradient-to-r from-primary to-secondary p-3 sm:p-4 rounded-full shadow-lg mb-4 animate-bounce-slow">
            <FiUsers className="text-white text-3xl sm:text-4xl" />
          </div>
          <Slide direction="left" delay={300} duration={1000}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 sm:mb-3 text-center drop-shadow-lg">
              Meet Our <span className="text-secondary">Event Organizers</span>
            </h2>
          </Slide>
          <Slide direction="right" delay={300} duration={1000}>
            <p className="text-accent text-center max-w-xs sm:max-w-xl md:max-w-2xl">
              The heart of Athletic Hub! Our organizers are dedicated to
              creating memorable, inclusive, and exciting sports events for
              everyone.
            </p>
          </Slide>
        </div>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {organizers.map((org, idx) => (
          <Slide key={org.email} direction={idx % 2 === 0 ? "left" : "right"}>
            <div className="group bg-base-100 rounded shadow-md hover:shadow-lg border-b-4 border-secondary transition-all duration-500 overflow-hidden flex flex-col items-center p-5 sm:p-6 md:p-8 relative hover:-translate-y-1">
              {/* Decorative badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary p-1.5 sm:p-2 rounded-full shadow-lg">
                <FiCheckCircle className="text-white text-xl sm:text-2xl" />
              </div>
              <div className="overflow-hidden w-20 h-20 sm:w-22 sm:h-22 mb-4 rounded-full border-4 border-secondary/30 shadow-md flex items-center justify-center">
                <img
                  src={org.photo}
                  alt={org.name}
                  className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 text-center">
                {org.name}
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <FiStar className="text-yellow-400 text-base sm:text-lg" />
                <span className="font-semibold text-base-content/80 text-sm sm:text-base">
                  {org.rating}
                </span>
                <span className="text-xs text-base-content/50">
                  ({org.events} events)
                </span>
              </div>
              <p className="text-accent text-center mb-4 text-xs sm:text-sm">{org.bio}</p>
              <a
                href={`mailto:${org.email}`}
                className="btn btn-xs sm:btn-sm bg-gradient-to-r from-primary to-secondary text-white rounded shadow hover:scale-105 transition flex items-center gap-2"
              >
                <FiMail /> Contact
              </a>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default EventOrganizers;
