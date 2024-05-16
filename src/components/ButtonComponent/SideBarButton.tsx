import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ButtonProps {
  name: string;
  icon: string;
  pathname: string;
}

const ButtonComponent: FC<ButtonProps> = ({ name, icon, pathname }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`flex items-center w-full bg-white rounded-md mt-4 p-2 sidebar-button ${
        location.pathname === pathname ? "selected-button" : "default-button"
      }`}
      onClick={() => navigate(pathname)}
    >
      <img src={`icons/${icon}`} alt="event" className="absolute" />
      <p className="font-sans m-auto text-center">{name}</p>
    </div>
  );
};

export default ButtonComponent;
