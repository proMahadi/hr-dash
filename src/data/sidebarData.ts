import { IconType } from "react-icons";
import { RxDashboard } from "react-icons/rx";
import { PiUsers } from "react-icons/pi";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { CiWallet } from "react-icons/ci";
import { SlClock } from "react-icons/sl";
import { BsTrophy } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { RiSettingsLine } from "react-icons/ri";







interface Menu {
  id: string;
  label: string;
  icon: IconType;
  submenu: boolean;
}

export const sidebarMenu: Menu[] = [
  {
    id: "1",
    label: "home",
    icon: RxDashboard,
    submenu: false,
  },
  {
    id: "2",
    label: "team",
    icon: PiUsers ,
    submenu: false,
  },
  {
    id: "3",
    label: "hire & onboard",
    icon: PiHandbagSimpleFill,
    submenu: false,
  },
  {
    id: "4",
    label: "payroll",
    icon: CiWallet ,
    submenu: true,
  },
  {
    id: "5",
    label: "time tracking",
    icon: SlClock  ,
    submenu: true,
  },
  {
    id: "6",
    label: "benefits",
    icon: BsTrophy  ,
    submenu: false,
  },
];
export const additionalMenu: Menu[] = [
  {
    id: "7",
    label: "notification",
    icon: VscBell,
    submenu: false,
  },
  {
    id: "8",
    label: "settings",
    icon: RiSettingsLine ,
    submenu: false,
  },
];
