import { ReactNode } from "react"

interface TableProps{
    className:string,
    children:ReactNode
}


const Table:React.FC<TableProps> = ({children,className}) => {
  return (
    <table className={className}>{children}</table>
  )
}

export default Table