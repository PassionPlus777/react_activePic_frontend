import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const LoginPage = lazy(() => import("@/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/RegisterPage"));

function UnAuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/login" replace={true} />} />
    </Routes>
  );
}

export default UnAuthRouter;
