import { useTheme } from "../../../contexts/ThemeContext";
import { additionalMenu, sidebarMenu } from "../../../data/sidebarData";
import { Logo } from "../../icons/icons";
import { FaAngleDown } from "react-icons/fa";

const Sidebar: React.FC = () => {
  const { isDark } = useTheme();

  const darkIconStyle = isDark === "dark" ? "#ffff" : "#718096";

  return (
    <section className="h-screen w-[253px] border-r shadow dark:border-darkBackground bg-white dark:bg-reverseWhite">
      <div className="py-8 px-5">
        <Logo
          fill={isDark === "dark" ? "#ffff" : "#393C43"}
          fill2={darkIconStyle}
        />
        <div className="mt-9">
          <h5 className="uppercase text-textLight dark:text-white font-medium text-sm mx-5">
            menu
          </h5>
          <ul className="mt-3">
            {sidebarMenu.map((menu) => (
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
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
