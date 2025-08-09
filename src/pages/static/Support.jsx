import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiMail, FiPhone, FiMessageCircle, FiHelpCircle } from "react-icons/fi";

const Support = () => {
  return (
    <section className="max-w-2xl mx-auto px-4">
      <title>Support | Athletic Hub</title>
      <Fade triggerOnce direction="up">
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
        <Slide triggerOnce direction="left">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-primary/30 hover:border-primary">
            <FiMail className="text-primary text-3xl mb-3" />
            <h3 className="font-bold text-primary mb-1">Email Us</h3>
            <p className="text-accent text-center text-sm mb-2">
              support@athletichub.com
            </p>
            <a
              href="mailto:shihabuddin.dev@gmail.com"
              className="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white rounded mt-2"
            >
              Send Email
            </a>
          </div>
        </Slide>
        <Slide triggerOnce direction="up">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-secondary/30 hover:border-secondary">
            <FiPhone className="text-secondary text-3xl mb-3" />
            <h3 className="font-bold text-secondary mb-1">Call Us</h3>
            <p className="text-accent text-center text-sm mb-2">
              +880 1740 520249
            </p>
            <a
              href="tel:+8801740520249"
              className="btn btn-sm bg-gradient-to-r from-secondary to-primary text-white rounded mt-2"
            >
              Call Now
            </a>
          </div>
        </Slide>
        <Slide triggerOnce direction="right">
          <div className="bg-base-100 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition-all border-l-4 border-primary/30 hover:border-primary">
            <FiMessageCircle className="text-primary text-3xl mb-3" />
            <h3 className="font-bold text-primary mb-1">Live Chat</h3>
            <p className="text-accent text-center text-sm mb-2">
              Chat for instant help.
            </p>
            <a
              href="https://www.linkedin.com/in/shihab-dev/"
              target="blank"
              className="btn btn-sm bg-gradient-to-r from-primary to-secondary text-white rounded mt-2"
            >
              Open Chat
            </a>
          </div>
        </Slide>
      </div>
      <Fade triggerOnce direction="up">
        <div className="mt-12 text-center text-accent text-sm">
          <span>
            For urgent issues, please mention <span className="font-semibold text-primary">"URGENT"</span> in your subject line.
          </span>
        </div>
      </Fade>

      {/* Support Hours */}
      <Fade triggerOnce direction="up">
        <div className="mt-16 max-w-xl mx-auto text-center">
          <h3 className="text-lg font-bold text-secondary mb-2">Support Hours</h3>
          <p className="text-accent text-sm mb-1">Sunday - Thursday: 9:00 AM - 8:00 PM (GMT+6)</p>
          <p className="text-accent text-sm">Friday & Saturday: Limited support (email only)</p>
        </div>
      </Fade>

      {/* FAQ Section */}
      <Fade triggerOnce direction="up">
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-base-100 rounded-lg shadow p-4">
              <p className="font-semibold text-base-content mb-1">How quickly will I get a response?</p>
              <p className="text-accent text-sm">We aim to respond to all queries within 24 hours on business days.</p>
            </div>
            <div className="bg-base-100 rounded-lg shadow p-4">
              <p className="font-semibold text-base-content mb-1">What information should I include in my support request?</p>
              <p className="text-accent text-sm">Please include your account email, a detailed description of your issue, and any relevant screenshots.</p>
            </div>
            <div className="bg-base-100 rounded-lg shadow p-4">
              <p className="font-semibold text-base-content mb-1">Is live chat available 24/7?</p>
              <p className="text-accent text-sm">Live chat is available from 9am to 8pm (GMT+6), Sunday to Thursday.</p>
            </div>
          </div>
        </div>
      </Fade>

    </section>
  );
};

export default Support;
