import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";

const AuthLayout = () => (
  <div className="flex min-h-screen flex-col bg-ww-bg text-ww-text">
    <Navbar />
    <main className="flex flex-1 items-start justify-center px-4 pt-14 pb-16 sm:pt-16 md:pt-[72px]">
      <Outlet />
    </main>
  </div>
);

export default AuthLayout;
