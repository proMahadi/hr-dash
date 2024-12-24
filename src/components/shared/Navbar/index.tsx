import {
  SearchIcon,
  LightIcon,
  DarkIcon,
  NotificationIcon,
  PersonIcon,
  ProfileDropdownIcon,
} from "../../icons/icons";
import profileImg from "../../../assets/profileImg.svg";
import { useTheme } from "../../../contexts/ThemeContext";
import { FaBars } from "react-icons/fa6";
import { useSidebar } from "../../../contexts/SidebarContext";

// import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { isDark, handleLightMode, handleDarkMode } = useTheme();
  const { showSidebar,setShowSidebar } = useSidebar();

  const darkIconStyle = isDark === "dark" ? "#ffff" : "#718096";

  return (
    <section className="bg-white dark:bg-reverseWhite ">
      <div className="py-6 px-4 lg:px-9">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-12 items-center">
          <form className="w-full relative">
            <input
              type="text"
              placeholder="search"
              className="w-full bg-background dark:bg-darkBackground py-[15px] pl-[52px] outline-none capitalize rounded-lg placeholder:text-textLight text-textLight placeholder:text-xs dark:placeholder:text-white dark:text-white"
            />
            <SearchIcon
              className="absolute top-[17px] left-5 z-10 "
              fill={darkIconStyle}
            />
          </form>
          <div className="flex justify-between gap-4 xl:gap-12 items-center">
            <button className="md:hidden w-fit h-fit" onClick={()=>setShowSidebar(!showSidebar)}>
              <FaBars className="text-xl text-textLight dark:text-white" />
            </button>
            <div className="bg-background dark:bg-darkBackground w-fit p-2 flex items-center gap-x-[10px] rounded-lg">
              <button
                onClick={handleLightMode}
                className="flex items-center gap-x-2 p-1.5 lg:py-2 lg:px-4  rounded-md bg-primary dark:bg-transparent "
              >
                <LightIcon fill={isDark === "dark" ? "#ffff" : "#222222"} />
                <span className="lg:block hidden text-sm capitalize text-dark dark:text-white">
                  light
                </span>
              </button>
              <button
                onClick={handleDarkMode}
                className="flex items-center gap-x-2 p-1.5 lg:py-2 lg:px-4 rounded-md bg-transparent dark:bg-primary"
              >
                <DarkIcon
                  stroke={isDark === "dark" ? "#222222" : "#718096"}
                  fill={isDark === "dark" ? "#222222" : "none"}
                />
                <span className="lg:block hidden text-sm capitalize text-textLight dark:text-dark">
                  dark
                </span>
              </button>
            </div>
            <div className="flex gap-4 xl:gap-7">
              <div className="flex items-center gap-x-4">
                <button className="h-10 w-10 rounded-full border border-textLight dark:border-white flex justify-center items-center relative">
                  <NotificationIcon fill={darkIconStyle} />
                  <span className="h-3 w-3 rounded-full bg-alert text-white text-[6px] flex justify-center items-center absolute top-0 right-0 z-10">
                    3
                  </span>
                </button>
                <button className="h-10 w-10 rounded-full border border-textLight dark:border-white flex justify-center items-center">
                  <PersonIcon fill={darkIconStyle} />
                </button>
              </div>
              <div className="flex items-center gap-3 w-[150px] cursor-pointer">
                <div className="text-right">
                  <h6 className="font-medium text-sm text-[#1F2937] dark:text-white">
                    Benjamin
                  </h6>
                  <p className="text-textLight text-xs dark:text-white">
                    Newyork, USA
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={profileImg}
                    alt="profile-img"
                    className="h-9 w-9 rounded-md"
                  />
                  <ProfileDropdownIcon fill={darkIconStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
