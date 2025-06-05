import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiMail, FiPhone, FiMessageCircle, FiHelpCircle } from "react-icons/fi";

const Support = () => {
  return (
    <section className="max-w-2xl mx-auto px-4">
      <Fade direction="up">
        <div className="flex flex-col items-center mb-10">
          <div className="bg-gradient-to-r from-primary to-secondary p-4 rounded-full shadow-lg mb-4">
            <FiHelpCircle className="text-white text-4xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 text-center">
            Need <span className="text-secondary">Help?</span>
          </h2>
          <p className="text-accent text-center max-w-xl">
            Our team is here to support you with any questions or issues. Reach
            out and we’ll respond as soon as possible!
          </p>
        </div>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Slide direction="left">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-primary/30 hover:border-primary">
            <FiMail className="text-primary text-3xl mb-3" />
            <h3 className="font-bold text-primary mb-1">Email Us</h3>
            <p className="text-accent text-center text-sm mb-2">
              support@athletichub.com
            </p>
            <a
              href="mailto:support@athletichub.com"
              className="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white rounded mt-2"
            >
              Send Email
            </a>
          </div>
        </Slide>
        <Slide direction="up">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-secondary/30 hover:border-secondary">
            <FiPhone className="text-secondary text-3xl mb-3" />
            <h3 className="font-bold text-secondary mb-1">Call Us</h3>
            <p className="text-accent text-center text-sm mb-2">
              +880 124-56890
            </p>
            <a
              href="tel:+88012456890"
              className="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white rounded mt-2"
            >
              Call Now
            </a>
          </div>
        </Slide>
        <Slide direction="right">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-primary/30 hover:border-primary">
            <FiMessageCircle className="text-primary text-3xl mb-3" />
            <h3 className="font-bold text-primary mb-1">Live Chat</h3>
            <p className="text-accent text-center text-sm mb-2">
              Chat with our support team for instant help.
            </p>
            <button
              className="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white rounded mt-2"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </Slide>
      </div>
      <Fade direction="up">
        <div className="mt-12 text-center text-accent text-sm">
          <span>
            For urgent issues, please mention{" "}
            <span className="font-semibold text-primary">"URGENT"</span> in your
            subject line.
          </span>
        </div>
      </Fade>
    </section>
  );
};

export default Support;
