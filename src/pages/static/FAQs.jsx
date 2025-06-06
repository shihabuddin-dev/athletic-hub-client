import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FiChevronDown, FiChevronUp, FiHelpCircle } from "react-icons/fi";

const faqData = [
  {
    question: "How do I book a spot for an event?",
    answer:
      "Simply browse the events, click on your preferred one, and hit the 'Reserve Your Spot' button. You’ll receive a confirmation email instantly.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes! Go to 'My Bookings' in your profile. You can cancel or modify your booking as per the event’s policy.",
  },
  {
    question: "Is my payment and data secure?",
    answer:
      "Absolutely. We use industry-standard encryption and never share your personal information with third parties.",
  },
  {
    question: "How do I become an event organizer?",
    answer:
      "Sign up and complete your organizer profile. Then, click 'Create Event' to start hosting your own sports events.",
  },
  {
    question: "What if I have more questions?",
    answer:
      "Reach out to our support team anytime via the Support page or email us at support@athletichub.com.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-3xl mx-auto px-2 sm:px-4 md:px-6">
      <title>FAQs | Athletic Hub</title>
      <div className="flex flex-col items-center mb-10">
        <div className="bg-gradient-to-r from-primary to-secondary p-3 sm:p-4 rounded-full shadow-lg mb-4">
          <FiHelpCircle className="text-white text-3xl sm:text-4xl" />
        </div>
        <Slide direction="right" delay={300} duration={1000}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 text-center">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
        </Slide>
        <Slide direction="left" delay={300} duration={1000}>
          <p className="text-accent text-center max-w-xs sm:max-w-xl text-sm sm:text-base">
            Everything you need to know about using{" "}
            <span className="font-semibold text-secondary">Athletic Hub</span>{" "}
            for booking, organizing, and enjoying sports events.
          </p>
        </Slide>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {faqData.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-md transform shadow-md border-l-4 transition-all duration-800 ease-in-out ${
              openIndex === idx
                ? "border-primary bg-base-100"
                : "border-base-200 bg-secondary/5"
            }`}
          >
            <button
              className="w-full flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 focus:outline-none"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-base sm:text-lg font-semibold text-primary text-left">
                {faq.question}
              </span>
              <span className="ml-2 sm:ml-4 text-secondary">
                {openIndex === idx ? (
                  <FiChevronUp size={22} />
                ) : (
                  <FiChevronDown size={22} />
                )}
              </span>
            </button>
            <div
              className={`px-3 sm:px-6 pb-3 sm:pb-4 text-accent text-sm sm:text-base transition-all duration-300 ${
                openIndex === idx
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
