import { PiExportThin } from "react-icons/pi";
import StatsCard from "../../common/StatsCard";
import { statsData } from "../../../data/statsData";

const Stats: React.FC = () => {
  return (
    <section className="flex flex-col gap-5">
      {/* report and stats varients */}
      <div className="flex items-center gap-6 justify-between">
        <div>
          <h4 className="font-bold text-textDark dark:text-white capitalize">
            open hiring
          </h4>
          <p className="text-sm text-textLight dark:text-white">
            Overview of your company&apos;s various hirings
          </p>
        </div>
        <button className="p-2.5 sm:px-4 sm:py-[14px] bg-primary hover:bg-primary/90 text-dark flex items-center gap-1 sm:gap-2 font-medium capitalize rounded-lg text-xs sm:text-sm">
          <PiExportThin />
          <span>export report</span>
        </button>
      </div>
      {/* report and stats varients */}
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
        {statsData.map((stat) => (
          <StatsCard key={stat.id} stat={stat}/>
        ))}
      </ul>
    </section>
  );
};

export default Stats;
