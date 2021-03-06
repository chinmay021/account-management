import React from "react";
import "./IndividualClub.css";
import Banner from "../../Banner";
import { useSortBy, useTable, usePagination } from "react-table";
import { fetchMembers } from "../../axios/requests";
import { useEffect, useState } from "react";

function IndividualClub({ clubName }) {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await fetchMembers(clubName);
      setMembers(data);
    }
    fetchData();
  }, [clubName]);

  const data = React.useMemo(() => members, [members]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name", // accessor is the "key" in the data
      },
      {
        Header: "Branch",
        accessor: "Branch",
      },
      {
        Header: "Contact",
        accessor: "Contact",
      },

      {
        Header: "SIC",
        accessor: "Sic",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
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

  return (
    <>
      <div className="club__home">
        <div className="club__name">{`${clubName} club`}</div>
        <Banner />
        <div className="club__officials">
          <div className="club__oficials__heading">Club Officials</div>
          <div className="club__official__wrapper">
            <div className="club__official">
              <div className="club__official__title">FIC</div>
              <div className="club__official__name">Mr. Pradipta </div>
              <div className="club__official__details">
                Contact : 8764287220
              </div>
            </div>
            <div className="club__official">
              <div className="club__official__title">Secretary</div>
              <div className="club__official__name">Rohit Kumar</div>
              <div className="club__official__details">
                Contact : 7571575650
              </div>
            </div>
            <div className="club__official">
              <div className="club__official__title">Vice Secretary</div>
              <div className="club__official__name">Sourav Kumar</div>
              <div className="club__official__details">
                Contact : 8276451836
              </div>
            </div>
          </div>
        </div>
        <div className="club__members__wrapper">
          <div className="club__members__heading">Club Members</div>
          <div className="table__container">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
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
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
            <div className="table__pagination">
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
              </button>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
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
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
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
      </div>
    </>
  );
}

export default IndividualClub;
