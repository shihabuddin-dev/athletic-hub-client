import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...props
}) => {
  let styles =
    "px-2 py-1 cursor-pointer md:py-1.5 border-2 rounded hover:scale-105 transition-transform duration-500 focus:outline-none ";

  if (variant === "primary") {
    styles += "px-4 bg-secondary border-secondary text-white";
  } else if (variant === "secondary") {
    styles += "bg-white bg-secondary";
  } else if (variant === "outline") {
    styles += "px-4 border-secondary text-secondary hover:bg-secondary/20";
  } else if (variant === "danger") {
    styles += "bg-red-600 border-none text-white hover:bg-red-500";
  } else {
    styles += "bg-gray-200 text-black";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
