import { lazy } from "react";
import { Col, Row } from "antd";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

import SideBarComponent from "@/components/SideBarComponent";
import MarkerPage from "@/pages/MarkerPage";
import ReportComponent from "@/components/ReportComponent";
import SupportComponent from "@/components/SupportComponent";

const HomePage = lazy(() => import("@/pages/HomePage"));
const EventPage = lazy(() => import("@/pages/EventPage"));

function AuthRouter() {
  const location = useLocation();
  return (
    <Row className="w-full h-full home-component p-5 justify-around">
      <Col
        span={4}
        className="flex flex-col justify-between h-full w-full sidebar rounded-md p-3 py-5"
      >
        <SideBarComponent />
      </Col>
      <Col span={19} className="flex flex-col h-full w-full">
        <div className="content-part p-3 text-white text-center rounded-md font-bold">
          {location.pathname === "/home" && (
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
        <div className="flex-1 flex-wrap content-part p-5 rounded-md mt-8 overflow-y-scroll">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/marker" element={<MarkerPage />} />
            <Route path="/report" element={<ReportComponent />} />
            <Route path="/support" element={<SupportComponent />} />
            <Route path="*" element={<Navigate to="/home" replace={true} />} />
          </Routes>
        </div>
      </Col>
    </Row>
  );
}

export default AuthRouter;
