import { Outlet } from "react-router";
import Sidebar from "../shared/Sidebar";
import Navbar from "../shared/Navbar";
import { useSidebar } from "../../contexts/SidebarContext";

const DashboardLayout: React.FC = () => {
  const{showSidebar}=useSidebar()
  return (
    <>
      <main className="container flex">
        <aside className="relative h-full">
          <div className={`h-screen w-[253px] hidden lg:block ${showSidebar?"lg:block":"hidden"}`}/>
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
