import { QueryResultSet } from "@flipsidecrypto/sdk/dist/src";
import TableHeaderProps from "../util/tableheaderprops";
import TableHeader from "../util/tableheader";
import TableRowsProps from "../util/tablerowprops";
import { ReactNode } from "react";
import TableRows from "../util/tablerows";

const Leaderboard = (tableHeaders: TableHeaderProps, tableRows: TableRowsProps<Array<string | number | boolean | null>>) => {
    return (
        <>
            <div className="leaderboard-table">
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {TableHeader(tableHeaders)}
                            {TableRows(tableRows)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Leaderboard;