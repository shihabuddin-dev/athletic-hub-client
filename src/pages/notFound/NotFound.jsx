import React from "react";
import notFound from "../../assets/lotti/notFound.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-base-100 text-center px-4 py-10">
      <div>
        <Lottie
          animationData={notFound}
          className="w-full max-w-md h-[200px] md:h-[400px] mx-auto"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-5xl md:text-6xl font-extrabold text-secondary drop-shadow-lg">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Page Not Found
        </h2>
        <p className="text-base md:text-lg text-base-content max-w-lg mx-auto mb-6">
          Oops! The page you are looking for does not exist or has been moved.
          <br />
          Please check the URL or return to the homepage.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
