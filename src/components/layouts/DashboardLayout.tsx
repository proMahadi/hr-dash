import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <main className="flex">
        <aside>sidebar</aside>
        <div>
          <div>navbar</div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
