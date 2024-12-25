import { useState } from "react";
import { WorkerInfo } from "../../data/employeData";
import { FiCopy } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

interface TableBodyItems {
  data: WorkerInfo[];
}

const TableBody: React.FC<TableBodyItems> = ({ data }) => {
  const handleCopyId = async ({ id }: { id: string }) => {
    try {
      await navigator.clipboard.writeText(id);
      alert(`ID ${id} copied to clipboard!`);
    } catch (error) {
      alert(`Failed to copy ID ${id}.`);
    }
  };
// console.log(data);

const [checkedIds, setCheckedIds] = useState<string[]>([]);

const handleIsCheck = ({ id }: { id: string }) => {
  if (checkedIds.includes(id)) {
    // Remove the id if it is already selected
    setCheckedIds((prev) => prev.filter((checkedId) => checkedId !== id));
  } else {
    // Add the id if it is not already selected
    setCheckedIds((prev) => [...prev, id]);
  }
};

  return (
    <tbody>
      {data.map((worker) => (
        <tr onClick={()=>handleIsCheck({id:worker.id})} className="hover:bg-background dark:hover:bg-darkBackground/40 rounded-xl cursor-pointer">
          <td className="p-4">
            <div className="flex items-center gap-2">
            <input type="checkbox" className="mr-2 rounded-[4px] bg-transparent"  checked={checkedIds.includes(worker.id)}/>
              <img
                src={worker.workerImg}
                alt="worker img"
                className="inline rounded-md h-6 w-6"
              />
              <span className="text-xs lg:text-sm font-semibold text-textLight dark:text-white">
                {worker.name}
              </span>
            </div>
          </td>
          <td className="p-4">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-textLight dark:text-white">
              <span>{worker.id}</span>
              <FiCopy onClick={() => handleCopyId({ id: worker.id })} />
            </div>
          </td>
          <td className="p-4">
            <span className="text-xs lg:text-sm text-textLight dark:text-white">
              {worker.hireType}
            </span>
          </td>
          <td className="p-4">
            <div className="flex gap-1.5 items-center">
              <img
                src={worker.flag}
                alt="country img"
                className="inline rounded-md h-6 w-6"
              />
              <span className="text-xs lg:text-sm text-textLight dark:text-white">
                {worker.country}
              </span>
            </div>
          </td>
          <td className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative  h-2 w-[93px] rounded-[4px] bg-background dark:bg-darkBackground overflow-hidden">
                <div className={`absolute top-0 left-0 z-20 h-2  bg-red-500 rounded-[4px]
                 ${worker.licenseUse===1 && "bg-license1"} 
                 ${worker.licenseUse===2 && "bg-license2"} 
                 ${worker.licenseUse===3 && "bg-license3"} 
                 ${worker.licenseUse===4 && "bg-license4"} 
                 ${worker.licenseUse===5 && "bg-license5"} 
                `}
                style={{
                  width: (worker.licenseUse/5)*100
                }}
                ></div>
              </div>
              <span className={`inline text-xs lg:text-sm text-textLight dark:text-white`}>
                {worker.licenseUse}/5
              </span>
            </div>
          </td>
          <td className="p-4">
            <div
              className={`flex gap-1.5 items-center py-2 p-2 lg:px-3 rounded-md capitalize text-xs lg:text-sm w-fit ml-auto ${
                worker.status === "draft" && "bg-yellow text-white"
              } ${worker.status === "new hire" && "bg-primary text-textDark"} ${
                worker.status ? "justify-end" : ""
              }`}
            >
              <GoDotFill />
              <span className={``}>{worker.status}</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
