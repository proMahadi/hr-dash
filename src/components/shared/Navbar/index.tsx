import { SearchIcon,LightIcon, DarkIcon } from "../../icons/icons";

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isDark,setIsDark] = useState<"dark"|"light">(() => {
    return (localStorage.getItem("theme") as "dark" | "light") || "light";
  });

  useEffect(() => {
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  const handleLightMode = () => {
    setIsDark("light");
  };

  const handleDarkMode = () => {
    setIsDark("dark");
  };
  
  return (
    <section className="bg-white dark:bg-reverseWhite border-b-2">
      <div className="py-6 px-4 lg:px-9">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12 items-center">
          <form className="w-full relative">
            <input
              type="text"
              placeholder="search"
              className="w-full bg-background dark:bg-darkBackground py-[15px] pl-[52px] outline-none capitalize rounded-lg placeholder:text-textLight text-textLight placeholder:text-xs dark:placeholder:text-white dark:text-white"
            />
            <SearchIcon className="absolute top-[17px] left-5 z-10 " fill={isDark==="dark"?"#ffff":"#718096"}/>
          </form>
          <div>
            <div className="bg-background dark:bg-darkBackground w-fit p-2 flex items-center gap-x-[10px] rounded-lg">
              <button onClick={handleLightMode} className={`flex items-center gap-x-2 p-1.5 lg:py-2 lg:px-4  rounded-md ${isDark==="light"?"bg-primary":"bg-transparent "}`}>
                <LightIcon fill={isDark==="dark"?"#ffff":"#222222"}/>
                <span className={`lg:block hidden capitalize ${isDark==="dark"?"text-white":"text-dark"}`}>light</span>
              </button>
              <button onClick={handleDarkMode} className={`flex items-center gap-x-2 p-1.5 lg:py-2 lg:px-4 rounded-md ${isDark==="dark"?"bg-primary":"bg-transparent"}`}>
                <DarkIcon stroke={isDark==="dark"?"#222222":"#718096"} fill={isDark==="dark"?"#222222":"none"}/>
                <span className={`lg:block hidden capitalize ${isDark==="dark"?"text-dark":"text-textLight"}`}>dark</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
