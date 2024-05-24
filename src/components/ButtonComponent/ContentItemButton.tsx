import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  name: string;
  icon?: string;
  pathname?: string;
}

const ContentItemButton: FC<ButtonProps> = ({
  name,
  icon = "",
  pathname = "",
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex items-center p-2 bg-white rounded-md contentitem-button 
      }`}
      onClick={() => pathname && navigate(pathname)}
    >
      {icon && <img src={`icons/${icon}`} alt="event" />}
      <p className="font-sans m-auto text-center font-semibold">{name}</p>
    </div>
  );
};

export default ContentItemButton;
