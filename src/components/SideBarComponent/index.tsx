import { Link } from "react-router-dom";

import { SidebarButton } from "../ButtonComponent";

import buttonItems from "../HomeComponent/SiceBarConfig";

function SideBar() {
  return (
    <>
      <div>
        <Link to="/home">
          <div className="flex justify-center p-3 rounded-md mark sideBar">
            <img src={"/images/mark.png"} alt="mark" height={"80px"} />
          </div>
        </Link>
        <div className="flex justify-center mt-4">
          <Link to="/">
            Logged in as <span className="user-email">test@test.com</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center mt-4 mx-2">
          {buttonItems.map((item, index) => (
            <SidebarButton key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="set-icon mb-4 mx-2">
        <SidebarButton name="Setting" pathname={""} icon="icon (17).png" />
        <Link to="/login">
          <SidebarButton name="Log Out" pathname={""} icon="icon (19).png" />
        </Link>
      </div>
    </>
  );
}

export default SideBar;
