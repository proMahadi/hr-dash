import { useEffect, useState } from "react";
import { WorkerInfo, workersData } from "../../../data/employeData";
import { FaPlus } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import Table from "../../common/Table";
import TableHeader, { TableHeadItems } from "../../common/TableHeader";
import TableBody from "../../common/TableBody";

const Employees: React.FC = () => {
  const [data, setData] = useState<WorkerInfo[]>([]);
  const [filterData, setFilterData] = useState<string[]>([]);

  const items: TableHeadItems[] = [
    { id: "1", item: "Name" },
    { id: "2", item: "Employment ID" },
    { id: "3", item: "Type of hire" },
    { id: "4", item: "Country" },
    { id: "5", item: "License use" },
    { id: "6", item: "Status" },
  ];



  useEffect(() => {
    setData(workersData);
    setFilterData([...new Set(workersData.map((worker) => worker.hireType))]);
  }, []);

  return (
    <section className="p-6 bg-white dark:bg-reverseWhite rounded-xl ">
      {/* filter and add */}
      <div className="flex xl:flex-row flex-col xl:items-center justify-between gap-6">
        <ul className="p-1.5 flex flex-wrap lg:flex-nowrap items-center gap-6 rounded-lg bg-background dark:bg-darkBackground w-fit">
          <li className="px-3 py-1.5 bg-white dark:bg-reverseWhite font-semibold text-sm text-dark dark:text-white rounded-lg flex items-center gap-2">
            <span>All hires</span>{" "}
            <span className="h-6 w-6 flex items-center justify-center text-dark bg-yellow rounded-[4px]">
              60
            </span>
          </li>
          {filterData.map((hireType) => (
            <li className="px-3 py-1.5 bg-white dark:bg-reverseWhite font-semibold text-sm text-dark dark:text-white rounded-lg flex items-center gap-2">
              {" "}
              <span>{hireType}</span>{" "}
              <span className="h-6 w-6 flex items-center justify-center text-dark bg-yellow rounded-[4px]">
                10
              </span>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button className="p-2.5 sm:px-4 sm:py-[14px] bg-primary hover:bg-primary/90 text-dark flex items-center gap-1 sm:gap-2 font-medium capitalize rounded-lg text-xs sm:text-sm">
            <FaPlus />
            <span>Add New</span>
          </button>
          <button className="p-2.5 sm:px-4 sm:py-[14px] bg-background dark:bg-darkBackground text-textLight dark:text-white flex items-center gap-1 sm:gap-2 font-medium capitalize rounded-lg text-xs sm:text-sm">
            <CiFilter />
            <span>filter</span>
          </button>
        </div>
      </div>
      {/* filter and add */}

      {/* table and list */}
      <Table className="w-full mt-6">
        <TableHeader items={items}/>
        <TableBody data={data}/>
      </Table>
      {/* table and list */}
    </section>
  );
};

export default Employees;
