import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ButtonProps {
  name: string;
  icon: string;
  pathname?: string;
}

const ButtonComponent: FC<ButtonProps> = ({ name, icon, pathname = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`flex items-center w-full font-bold mt-4 p-2 py-3 sidebar-button ${
        location.pathname === pathname ? "selected-button" : ""
      }`}
      onClick={() => navigate(pathname)}
    >
      {/* <img src={`icons/${icon}`} alt="event" className="absolute" /> */}
      <p className="text-xl text-white">{name}</p>
    </div>
  );
};

export default ButtonComponent;
