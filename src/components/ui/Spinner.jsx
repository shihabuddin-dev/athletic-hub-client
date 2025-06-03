import Lottie from "lottie-react";
import React from "react";
import spinner from "../../assets/lotti/spinner.json";

const Spinner = () => {
  return (
    <div className="flex justify-center pt-6">
      <Lottie animationData={spinner} className="w-full h-[200px]" />
    </div>
  );
};

export default Spinner;
