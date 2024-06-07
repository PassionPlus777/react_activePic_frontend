import { FC, MouseEventHandler } from "react";

interface ButtonProps {
  name: string;
  icon?: string;
  onClick?: MouseEventHandler;
}

const ContentItemButton: FC<ButtonProps> = ({ name, icon = "", onClick }) => {
  return (
    <div
      className={`flex items-center p-2 bg-white rounded-md contentitem-button`}
      onClick={onClick}
    >
      {icon && <img src={`icons/${icon}`} alt="event" />}
      <p className="font-sans m-auto text-center font-semibold">{name}</p>
    </div>
  );
};

export default ContentItemButton;
