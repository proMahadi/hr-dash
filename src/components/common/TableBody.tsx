import { WorkerInfo } from "../../data/employeData";
import { FiCopy } from "react-icons/fi";

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


  return (
    <tbody>
      {data.map((worker) => (
        <tr>
          <td className="p-4">
            <img src={worker.workerImg} alt="worker img" className="inline" />
            <span>{worker.name}</span>
          </td>
          <td className="p-4">
            <div className="flex items-center gap-2">
              <span>{worker.id}</span>
                <FiCopy onClick={()=>handleCopyId({id:worker.id})} />
            </div>
          </td>
          <td className="p-4">
            <span>{worker.hireType}</span>
          </td>
          <td className="p-4">
            <img src={worker.flag} alt="country img" className="inline" />
            <span>{worker.country}</span>
          </td>
          <td className="p-4">
            <div>
              <div></div>
            </div>
            <span className="inline">{worker.licenseUse}/5</span>
          </td>
          <td className="p-4">
            <div className={`flex ${worker.status ? "justify-end" : ""}`}>
              <span>{worker.status}</span>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
