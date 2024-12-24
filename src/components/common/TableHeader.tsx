export interface TableHeadItems {
  id: string;
  item: string;
}

interface TableHeaderItems {
  items: TableHeadItems[];
}
const TableHeader: React.FC<TableHeaderItems> = ({ items }) => {
  const lastIndex = items.length - 1;
  return (
    <thead>
      <tr className="border border-borderColor rounded-lg">
        {items.map((head, index) => (
          <th className={`p-4 text-left text-textDark dark:text-white font-medium text-sm   ${index == lastIndex ? "text-right" : ""}`}>
            {index == 0 && <input type="checkbox" />}
            <span>{head.item}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;