import TableHeaderProps from "./tableheaderprops";

const TableHeader = ({ columns }: TableHeaderProps): JSX.Element => {
    const headers = columns?.map((column, index) => {
        return (
            <th>{column.header}</th>
        );
    });

    return (
        <tr>{headers}</tr>
    );
};

export default TableHeader;