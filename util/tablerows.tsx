import TableRowsProps from "./tablerowprops";

const TableRows = ({ data }: TableRowsProps<Array<string | number | boolean | null>>): JSX.Element[] => {
    const rows = 
        data?.map((row, index2) => 
            <tr>
                {
                    row?.map((rowData, index3) => {
                        return (
                            <td>{rowData}</td>
                        )
                    })
                }
            </tr>
        );
  
    return rows;
  };
  
  export default TableRows;
  