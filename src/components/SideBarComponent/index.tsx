import { FC } from "react";
import { SidebarButton } from "../ButtonComponent";

import buttonItems from "../HomeComponent/SiceBarConfig";
import { Link } from "react-router-dom";

const SideBarComponent: FC = () => {
  const logOut = () => {
    localStorage.removeItem("axios_token");
    location.reload();
  };
  return (
    <div className="flex flex-col justify-around h-full">
      <div className="header-component">
        <Link to="/" className="flex justify-center p-3 rounded-md">
          <img src={"/images/mark.png"} alt="mark" />
        </Link>
        <Link to="/" className="flex justify-center mt-4 text-white">
          Logged in as&nbsp;<span className="user-email">test@test.com</span>
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        {buttonItems.map((item, index) => (
          <SidebarButton key={index} {...item} />
        ))}
      </div>
      <div className="set-icon">
        <SidebarButton name="Setting" icon="icon (17).png" />
        <div onClick={logOut}>
          <SidebarButton name="Log Out" icon="icon (19).png" />
        </div>
      </div>
    </div>
  );
};

export default SideBarComponent;
