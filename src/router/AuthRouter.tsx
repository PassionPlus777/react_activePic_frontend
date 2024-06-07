import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Drawer, Layout } from "antd";

import { useAppDispatch, useAppSelector } from "@/store";
import { getMe } from "@/store/authSlice";

import SideBarComponent from "@/components/SideBarComponent";
import MarkerPage from "@/pages/MarkerPage";
import ReportComponent from "@/components/ReportComponent";
import SupportComponent from "@/components/SupportComponent";
import HeaderComponent from "@/components/HeaderComponent";
import { setMobileStatus } from "@/store/configSlice";

const HomePage = lazy(() => import("@/pages/HomePage"));
const EventPage = lazy(() => import("@/pages/EventPage"));

const { Header, Sider, Content } = Layout;

function AuthRouter() {
  const dispatch = useAppDispatch();

  const { mobileStauts } = useAppSelector((state) => state.config);

  const dispatchSetMobileStatus = (value: boolean) => {
    dispatch(setMobileStatus(value));
  };

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <Layout>
      <Sider
        className="bg-3"
        width={290}
        breakpoint="xl"
        collapsedWidth="0"
        trigger={null}
        onBreakpoint={(broken) => {
          if (broken) {
            dispatchSetMobileStatus(false);
          }
        }}
      >
        <SideBarComponent />
      </Sider>
      <Layout>
        <Header
          style={{ height: "auto" }}
          className="mt-5 2xl:mt-10 p-0 px-5 2xl:px-20"
        >
          <HeaderComponent dispatchSetMobileStatus={dispatchSetMobileStatus} />
        </Header>
        <Content className="m-5 2xl:m-20 rounded-md p-5 2xl:p-10 bg-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/marker" element={<MarkerPage />} />
            <Route path="/report" element={<ReportComponent />} />
            <Route path="/support" element={<SupportComponent />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </Content>
      </Layout>
      <Drawer
        className="bg-3"
        placement="left"
        onClose={() => dispatchSetMobileStatus(false)}
        open={mobileStauts}
      >
        <SideBarComponent />
      </Drawer>
    </Layout>
  );
}

export default AuthRouter;
