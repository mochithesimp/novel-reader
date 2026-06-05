import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MainLayout = () => (
  <div className="flex min-h-screen flex-col bg-ww-bg text-ww-text">
    <Navbar />
    <main className="flex-1 pt-14 sm:pt-16 md:pt-[72px]">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
