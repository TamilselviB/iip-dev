import React from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { GlobalFilter } from "../../util/GlobalFilter";

const TableSafetyMeasures = ({ columns, data, safetyMeasures }) => {
  console.log(data)
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // nextPage,
    // previousPage,
    // canNextPage,
    // canPreviousPage,
    // pageOptions,
    // gotoPage,
    // pageCount,
    // setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <table {...getTableProps()} style={{ display: "table" }}>
        <tbody {...getTableBodyProps()}>
          {console.log(page)}
          <tr style={{ display: "table-cell", backgroundColor: "whitesmoke" }}>
            <td
              style={{
                display: "block",
                color: "blue",
                textAlign: "left",
                backgroundColor: "#efefef",
                marginTop: "-9px",
                border: "1px solid white",
              }}
            >
              Subsidiary Company,Property &nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </td>

            {safetyMeasures && safetyMeasures.length > 0
              ? safetyMeasures.map((safetyMeasure, index) => (
                  <td
                    style={{
                      display: "block",
                      color: "black",
                      textAlign: "left",
                      border: "none",
                    }}
                  >
                    {safetyMeasure}
                  </td>
                ))
              : ""}
          </tr>

          {page.map((row) => {
            prepareRow(row);
           
            return (
              <tr {...row.getRowProps()} style={{ display: "table-cell" }}>
                {row.cells.map((cell) => { 
                  return (
                    <td {...cell.getCellProps()} style={{ display: "block" }}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br></br>
      {/* <div>
                <span>
                    Page{''}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{''}
                </span>
                <span>
                    | Go to Page:{' '}
                    <input type='number'
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(pageNumber)
                        }}
                        style={{ width: "50px", borderColor: "lightgrey" }}
                    />
                </span>
                <label style={{ marginLeft: "670px" }}> Rows Per Page</label>
                <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} style={{
                    borderColor: "lightgrey", height: "30px"
                }}>
                    {
                        [10, 25, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                </select>
                <span>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage} style={{ height: "40px", width: "120px", backgroundColor: "white", border: "none", marginLeft: "0px" }}><FontAwesomeIcon
                        icon={faAngleLeft} style={{ fontSize: "40px", marginBottom: "-8px" }} /></button>
                    <button onClick={() => nextPage()} disabled={!canNextPage} style={{ height: "40px", width: "120px", backgroundColor: "white", border: "none", marginLeft: "-45px" }}><FontAwesomeIcon
                        icon={faAngleRight} style={{ fontSize: "40px", marginBottom: "-8px" }} /></button>
                </span>
            </div> */}
    </>
  );
};

export default TableSafetyMeasures;
