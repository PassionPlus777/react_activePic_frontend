import { useLocation } from "react-router-dom";
import { FC } from "react";
import HeaderComponent from "../HeaderComponent";
import { ContentHeaderProps } from "@/types";

const ContentHeaderComponent: FC<ContentHeaderProps> = ({
  dispatchSetMobileStatus,
}) => {
  const location = useLocation();

  return (
    <>
      <div className="hidden lg:block p-3 text-white text-center text-[33px] rounded-md font-bold">
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
      <div className="lg:hidden rounded-md">
        <HeaderComponent dispatchSetMobileStatus={dispatchSetMobileStatus} />
      </div>
    </>
  );
};

export default ContentHeaderComponent;
