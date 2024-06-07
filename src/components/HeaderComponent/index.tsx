import { MenuUnfoldOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { HeaderProps } from "@/types";

const HeaderComponent: FC<HeaderProps> = ({ dispatchSetMobileStatus }) => {
  const location = useLocation();
  return (
    <>
      <div className="header-desktop hidden xl:block p-3 text-white text-center text-[33px] rounded-md font-bold">
        {location.pathname === "/" && (
          <>
            Event Management <span className="text-blue-400">Dashboard</span>
          </>
        )}
        {location.pathname === "/event" && (
          <>
            Event Management <span className="text-blue-400">Dashboard</span>
          </>
        )}
        {location.pathname === "/active" && (
          <>
            Active <span className="text-blue-400">Dashboard</span>
          </>
        )}
        {location.pathname === "/marker" && (
          <>
            Marker <span className="text-blue-400">Dashboard</span>
          </>
        )}
        {location.pathname === "/report" && (
          <>
            Reporting <span className="text-blue-400">Dashboard</span>
          </>
        )}
        {location.pathname === "/support" && <>Support</>}
      </div>
      <div className="header-mobile xl:hidden rounded-md">
        <div className="header-component p-5">
          <div className="icon xl:hidden inline p-1 rounded-md cursor-pointer">
            <MenuUnfoldOutlined
              style={{ fontSize: 25, color: "rgba(76, 81, 86, 1)" }}
              onClick={() => dispatchSetMobileStatus(true)}
            />
          </div>
          <Link to="/" className="flex justify-center p-3 rounded-md">
            <img src={"/images/mark.png"} alt="mark" />
          </Link>
          <Link to="/" className="flex justify-center mt-4">
            Logged in as&nbsp;<span className="user-email">test@test.com</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
