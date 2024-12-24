import { useTheme } from "../../../contexts/ThemeContext";
import { additionalMenu, sidebarMenu } from "../../../data/sidebarData";
import { Logo } from "../../icons/icons";
import { FaAngleDown, FaAngleUp, FaArrowLeft } from "react-icons/fa";
import profileImgTwo from "../../../assets/profileImgTwo.svg";
import UpgradeCard from "../../common/UpgradeCard";
import { useSidebar } from "../../../contexts/SidebarContext";

const Sidebar: React.FC = () => {
 const{showSidebar,setShowSidebar}=  useSidebar()

  const { isDark } = useTheme();

  const darkIconStyle = isDark === "dark" ? "#ffff" : "#718096";



  return (
    <section
      className={`fixed top-0 left-0  h-screen w-[253px] overflow-hidden hover:overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary dark:scrollbar-thumb-darkBackground scrollbar-thumb-rounded-full  border-r shadow dark:border-darkBackground bg-white dark:bg-reverseWhite z-50 duration-300 md:duration-0 ${
        showSidebar ? "left-0" : "left-[-253px]"
      }`}
    >
      <div className="py-8 px-5 ">
        <div className=" flex">
          <Logo
            fill={isDark === "dark" ? "#ffff" : "#393C43"}
            fill2={darkIconStyle}
          />
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className={`md:hidden  flex justify-center items-center text-textLight dark:text-white z-10 duration-300  `}
          >
            <FaArrowLeft className="text-lg" />
          </div>
        </div>
        <div className="mt-9">
          <h5 className="uppercase text-textLight dark:text-white font-medium text-sm mx-5">
            menu
          </h5>
          <ul className="mt-3">
            {sidebarMenu.map((menu) => (
              <li className="relative z-[9999] group  ">
                <div className="py-[18px] px-5 flex items-center justify-between text-textLight dark:text-white dark:group-hover:text-dark text-sm gap-x-4 cursor-pointer group-hover:bg-primary  rounded-xl  ">
                  <div className="flex items-center gap-x-4 group-hover:font-bold group-hover:text-dark">
                    <menu.icon className="text-xl" />
                    <span className="capitalize">{menu.label}</span>
                  </div>
                  {menu.submenu && (
                    <FaAngleDown className="text-textLight dark:text-white dark:group-hover:text-dark" />
                  )}
                </div>
                <div className="absolute h-full w-full bg-dark dark:bg-darkBackground top-0 left-4 z-[-1]  group-hover:opacity-100 opacity-0 rounded-xl  " />
              </li>
            ))}
          </ul>
          <ul className="mt-[54px]">
            {additionalMenu.map((menu) => (
              <li className="relative z-[9999] group  ">
                <div className="py-[18px] px-5 flex items-center justify-between text-textLight dark:text-white dark:group-hover:text-dark text-sm gap-x-4 cursor-pointer group-hover:bg-primary hover:font-bold hover:text-dark rounded-xl  ">
                  <div className="flex items-center gap-x-4">
                    <menu.icon className="text-xl" />
                    <span className="capitalize">{menu.label}</span>
                  </div>
                  {menu.submenu && (
                    <FaAngleDown className="text-textLight dark:text-white dark:group-hover:text-dark" />
                  )}
                </div>
                <div className="absolute h-full w-full bg-dark dark:bg-darkBackground top-0 left-4 z-[-1]  group-hover:opacity-100 opacity-0 rounded-xl  " />
              </li>
            ))}
          </ul>
          <div className=" mt-6 cursor-pointer flex items-center justify-between py-5 px-3 rounded-lg bg-background dark:bg-darkBackground">
            <div className="flex items-center gap-2">
              <img
                src={profileImgTwo}
                alt="profile Image two"
                className="h-9 w-9 rounded-md"
              />
              <div>
                <h6 className="text-sm font-semibold text-dark dark:text-white">
                  Ariyan Rooben
                </h6>
                <p className="text-[10px] text-dark dark:text-white">
                  Web Designer
                </p>
              </div>
            </div>
            <div className="text-dark dark:text-white">
              <FaAngleUp />
              <FaAngleDown />
            </div>
          </div>
          <div className="mt-[54px]">
            <UpgradeCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
