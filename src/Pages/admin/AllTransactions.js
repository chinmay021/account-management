import { useContext } from "react";
import React from "react";
import { Redirect } from "react-router-dom";
import { useSortBy, useTable, usePagination } from "react-table";
import { GlobalContext } from "../../context/GlobalState";

function AllTransactions() {
  // const [alltransaction, setAllTransaction] = useState([]);
  const { transactions } = useContext(GlobalContext);

  const data = React.useMemo(() => transactions, [transactions]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name", // accessor is the "key" in the data
      },
      {
        Header: "Amount",
        accessor: "Amount",
      },
      {
        Header: "Type",
        accessor: "Type",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  if (!sessionStorage.getItem("clubName")) {
    return <Redirect to="/login" />;
  } else {
    return (
      <div className="all__transactions__wrapper">
        <h2 style={{ marginBottom: "30px" }}>ALL TRANSACTIONS</h2>
        <div className="table__container">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="table__pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>
            <span
              style={{
                fontFamily: "Montserrat",
                padding: "0px 10px",
                fontWeight: "500",
              }}
            >
              Page
              <strong style={{ padding: "0px 10px" }}>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
            <span
              style={{
                fontFamily: "Montserrat",
                paddingLeft: "5px",
                fontWeight: "500",
              }}
            >
              | Go to page :
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 40, 50, 100].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTransactions;
