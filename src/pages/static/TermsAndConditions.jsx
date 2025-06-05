import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import {
  FiShield,
  FiUserCheck,
  FiAlertTriangle,
  FiEdit3,
  FiMail,
} from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <section className="mt-16 max-w-4xl mx-auto px-4 relative">
      {/* Decorative background blob */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
      <Fade direction="up">
        <div className="flex flex-col items-center mb-6 relative z-10">
          <div className="bg-gradient-to-r from-primary to-secondary p-5 rounded-full shadow-xl mb-5 animate-bounce-slow">
            <FiShield className="text-white text-5xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-primary mb-2 text-center drop-shadow-lg">
            Terms &amp; <span className="text-secondary">Conditions</span>
          </h1>
          <p className="mb-6 text-accent text-center">
            Effective Date: June 5, 2025
          </p>
        </div>
      </Fade>
      <div className="space-y-8 relative z-10">
        <Slide direction="left">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-primary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2">
              <FiUserCheck /> 1. Acceptance of Terms
            </h2>
            <p className="text-primary">
              By accessing or using{" "}
              <span className="font-bold text-secondary">Athletic Hub</span>,
              you agree to be bound by these Terms &amp; Conditions and our
              Privacy Policy. If you do not agree, please do not use our
              services.
            </p>
          </section>
        </Slide>
        <Slide direction="right">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-primary mb-2">
              <FiEdit3 /> 2. Use of Service
            </h2>
            <ul className="list-disc pl-6 text-primary">
              <li>You must be at least 16 years old to use Athletic Hub.</li>
              <li>
                You agree to provide accurate, current, and complete
                information.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You may not use Athletic Hub for any unlawful or prohibited
                purpose.
              </li>
            </ul>
          </section>
        </Slide>
        <Slide direction="left">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-primary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2">
              <FiEdit3 /> 3. Events &amp; Content
            </h2>
            <ul className="list-disc pl-6 text-primary">
              <li>
                You are solely responsible for the content you post, including
                events, photos, and messages.
              </li>
              <li>
                Content must not be false, misleading, offensive, or infringe on
                any rights.
              </li>
              <li>
                We reserve the right to remove any content that violates these
                terms or is deemed inappropriate.
              </li>
            </ul>
          </section>
        </Slide>
        <Slide direction="right">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-primary mb-2">
              <FiAlertTriangle /> 4. Account Termination
            </h2>
            <p className="text-primary">
              We may suspend or terminate your account at our discretion,
              without notice, if you violate these terms or engage in harmful
              behavior.
            </p>
          </section>
        </Slide>
        <Slide direction="left">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-primary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2">
              <FiShield /> 5. Intellectual Property
            </h2>
            <p className="text-primary">
              All content and materials on Athletic Hub, except user-generated
              content, are the property of Athletic Hub or its licensors. You
              may not use, copy, or distribute any content without permission.
            </p>
          </section>
        </Slide>
        <Slide direction="right">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-primary mb-2">
              <FiAlertTriangle /> 6. Limitation of Liability
            </h2>
            <p className="text-primary">
              Athletic Hub is provided "as is" without warranties of any kind.
              We are not liable for any damages or losses resulting from your
              use of the service.
            </p>
          </section>
        </Slide>
        <Slide direction="left">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-primary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-secondary mb-2">
              <FiEdit3 /> 7. Changes to Terms
            </h2>
            <p className="text-primary">
              We may update these Terms &amp; Conditions at any time. Continued
              use of Athletic Hub after changes constitutes acceptance of the
              new terms.
            </p>
          </section>
        </Slide>
        <Slide direction="up">
          <section className="bg-base-100 rounded-xl shadow-md p-6 border-l-4 border-secondary/20">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-primary mb-2">
              <FiMail /> 8. Contact Us
            </h2>
            <p className="text-primary">
              If you have questions about these Terms &amp; Conditions, contact
              us at{" "}
              <a
                href="mailto:support@athletichub.com"
                className="text-secondary underline"
              >
                support@athletichub.com
              </a>
              .
            </p>
          </section>
        </Slide>
      </div>
    </section>
  );
};

export default TermsAndConditions;
