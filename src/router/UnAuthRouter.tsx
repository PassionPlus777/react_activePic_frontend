import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/LoginPage"));

function UnAuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
}

export default UnAuthRouter;
