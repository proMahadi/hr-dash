import { Outlet } from "react-router";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <main className="container flex">
        <aside className="relative">
            <Sidebar/>
        </aside>
        <div className="w-full">
          <Navbar/>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
