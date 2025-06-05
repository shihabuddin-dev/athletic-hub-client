import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiEdit, FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

const blogPosts = [
  {
    title: "5 Tips to Maximize Your Sports Event Experience",
    date: "June 5, 2025",
    author: "Coach Riley",
    excerpt:
      "Discover how to get the most out of every event you attend, from preparation to post-game networking.",
    image: "/src/assets/slider/1.jpg",
    link: "#",
  },
  {
    title: "Why Community Sports Matter More Than Ever",
    date: "May 28, 2025",
    author: "Jordan Smith",
    excerpt:
      "Explore the impact of local sports on health, happiness, and community spirit in today's world.",
    image: "/src/assets/slider/2.jpg",
    link: "#",
  },
  {
    title: "How to Organize a Successful Athletic Event",
    date: "May 15, 2025",
    author: "EventPro Team",
    excerpt:
      "A step-by-step guide for new organizers to plan, promote, and execute memorable sports events.",
    image: "/src/assets/slider/3.jpg",
    link: "#",
  },
  {
    title: "Nutrition for Peak Performance: What Every Athlete Should Know",
    date: "May 1, 2025",
    author: "Dr. Emily Chen",
    excerpt:
      "Learn the essentials of sports nutrition to fuel your body and maximize your results on the field.",
    image: "/src/assets/slider/4.jpg",
    link: "#",
  },
  {
    title: "Balancing Training and Recovery: The Secret to Success",
    date: "April 20, 2025",
    author: "Coach Alex",
    excerpt:
      "Find out how to structure your training and rest for optimal performance and injury prevention.",
    image: "/src/assets/slider/5.jpg",
    link: "#",
  },
  {
    title: "The Rise of Women in Sports: Breaking Barriers Together",
    date: "April 10, 2025",
    author: "Samantha Lee",
    excerpt:
      "Celebrate the achievements and stories of women athletes making history in the world of sports.",
    image: "/src/assets/slider/1.jpg",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <title>Blog | Athletic Hub</title>
      <Fade direction="up">
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full shadow-lg mb-4 animate-bounce-slow">
            <FiEdit className="text-white text-4xl" />
          </div>
          <Slide direction="right" delay={300} duration={1000}>
            <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-3 text-center drop-shadow-lg">
              Latest <span className="text-secondary">Blog</span> Posts
            </h2>
          </Slide>
          <Slide direction="left" delay={300} duration={1000}>
            <p className="text-accent text-center max-w-2xl">
              Stay updated with tips, stories, and guides from the Athletic Hub
              community. Dive into our latest articles to boost your sports
              journey!
            </p>
          </Slide>
        </div>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogPosts.map((post, idx) => (
          <Slide
            key={idx}
            direction={idx % 2 === 0 ? "left" : "right"}
            triggerOnce
          >
            <div className="group bg-base-100 rounded shadow-lg hover:shadow-2xl border-b-4 border-primary/20 hover:border-primary transition-all duration-300 overflow-hidden flex flex-col h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  <FiCalendar className="inline mr-1" /> {post.date}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 mb-3 text-accent text-sm">
                  <FiUser className="text-secondary" />
                  <span>{post.author}</span>
                </div>
                <p className="text-accent mb-4 flex-1">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline mt-auto"
                >
                  Read More <FiArrowRight />
                </a>
              </div>
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default Blog;
