import { Stats } from "../../data/statsData";
import { BsThreeDots, BsGraphUpArrow } from "react-icons/bs";

interface StatsCardProps {
  stat: Stats;
}

const StatsCard: React.FC<StatsCardProps> = ({ stat }) => {
  return (
    <li className="p-3 md:p-6 bg-white dark:bg-reverseWhite border border-white dark:border-reverseWhite hover:border-borderColor dark:hover:border-primary duration-200 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={stat.icon} alt="" />
          <h4 className="text-textDark dark:text-white textbase font-semibold">
            {stat.statof}
          </h4>
        </div>
        <BsThreeDots className="text-textDark dark:text-white text-xl" />
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-[42px] font-semibold mt-[14px] text-textDark dark:text-white">
        {stat.applicantNow}
        {stat.invitedNow}
        {stat.hiredNow}
      </h1>
      <div className="flex justify-between items-end mt-[6px]">
        <p className="w-[180px] text-sm text-textLight dark:text-white">
          Total Applied last year were{" "}
          <span className="text-textDark dark:text-primary">
            {stat.applicantPrev}
            {stat.invitedPrev}
            {stat.hiredPrev}
          </span>{" "}
          candidate
        </p>
        <div>
          <p className="text-textLight dark:text-white text-xs capitalize text-right">
            last month
          </p>
          <div className="py-[6px] px-[10px] mt-[6px] rounded-lg bg-background dark:bg-darkBackground text-base text-dark dark:text-white flex items-center gap-[6px]">
            <BsGraphUpArrow />
            <span>+{stat.growth}%</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default StatsCard;
