import { lazy } from "react";
import { Col, Row } from "antd";
import { Route, Routes, Link } from "react-router-dom";

import SideBarComponent from "@/components/SideBarComponent";
import MarkerPage from "@/pages/MarkerPage";
import ReportComponent from "@/components/ReportComponent";

const HomePage = lazy(() => import("@/pages/HomePage"));
const EventPage = lazy(() => import("@/pages/EventPage"));

function AuthRouter() {
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
          Event Management <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="flex-1 flex-wrap content-part p-5 rounded-md mt-8 overflow-y-scroll">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/marker" element={<MarkerPage />} />
            <Route path="/report" element={<ReportComponent />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </div>
      </Col>
    </Row>
  );
}

export default AuthRouter;
