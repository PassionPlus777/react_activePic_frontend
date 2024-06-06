import { lazy, useEffect } from "react";
import { Hidden } from "@mui/material";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { Route, Routes, Navigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/store";
import { getMe } from "@/store/authSlice";

import SideBarComponent from "@/components/SideBarComponent";
import MarkerPage from "@/pages/MarkerPage";
import ReportComponent from "@/components/ReportComponent";
import SupportComponent from "@/components/SupportComponent";
import ContentHeaderComponent from "@/components/ContentHeaderComponent";
import { setMobileStatus } from "@/store/configSlice";

const HomePage = lazy(() => import("@/pages/HomePage"));
const EventPage = lazy(() => import("@/pages/EventPage"));

const navbarWidth = 280;

const StyledNavBarMobile = styled(SwipeableDrawer)(() => ({
  "& .MuiDrawer-paper": {
    minWidth: navbarWidth,
    width: navbarWidth,
    maxWidth: navbarWidth,
  },
}));

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
    <div className="flex w-full h-full p-5 justify-around">
      <Hidden lgUp>
        <StyledNavBarMobile
          classes={{
            paper: "flex-col flex-auto h-full",
          }}
          anchor={"left"}
          variant="temporary"
          open={mobileStauts}
          onClose={() => dispatch(setMobileStatus(false))}
          onOpen={() => {}}
          disableSwipeToOpen
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <SideBarComponent />
        </StyledNavBarMobile>
      </Hidden>

      <Hidden lgDown>
        <div className="sidebarcomponent flex flex-col justify-between h-full rounded-md p-3 py-5">
          <SideBarComponent />
        </div>
      </Hidden>

      <div className="grow flex flex-col h-full ml-0 lg:ml-5">
        <div className="content-header">
          <ContentHeaderComponent
            dispatchSetMobileStatus={dispatchSetMobileStatus}
          />
        </div>
        <div className="flex-1 flex-wrap content-part rounded-md mt-8 overflow-y-scroll">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/marker" element={<MarkerPage />} />
            <Route path="/report" element={<ReportComponent />} />
            <Route path="/support" element={<SupportComponent />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AuthRouter;
