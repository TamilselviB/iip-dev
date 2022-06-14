import React from "react";
import {
  useSortBy,
  useTable,
  useGlobalFilter,
  usePagination,
} from "react-table";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { GlobalFilter } from "../../util/GlobalFilter";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: 'black',
  },
}));

const TableSafety = ({ columns, data, safetyMeasures }) => {
  const classes = useStyles();
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
        <div className={classes.root}>
        <Grid container xs={12}>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
      <TableContainer component={Paper} elevation={12} style={{ display: 'flex' }}>
      <Table className={classes.table} {...getTableProps()}>
        <TableHead {...getTableBodyProps()}>
          {console.log(page)}
          <TableRow style={{ display: "table-cell" }}> 
            <TableCell
           
            align="center"
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              padding: 10,
              color: '#fff',
              backgroundColor: '#35baf6',
              borderStyle: 'hidden',
              display: 'block',
            }}
            >
              Subsidiary Company,Property &nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </TableCell>

            {safetyMeasures && safetyMeasures.length > 0
              ? safetyMeasures.map((safetyMeasure, index) => (
                  <TableCell
                  align="center"
                  style={{
                    display: "block",
                    fontWeight: 'bold',
                    textAlign: "left",
                    borderStyle: 'hidden',
                    backgroundColor: '#e9e9e9',
                  }}
                  // className={classes.tablerow1}
                  >
                    {safetyMeasure}
                  </TableCell>
                ))
              : ""}
          </TableRow>

          {page.map((row) => {
            prepareRow(row);
           
            return (
              <TableRow {...row.getRowProps()} style={{ display: "table-cell" }}>
                {row.cells.map((cell) => { 
                  return (
                    <TableCell align="center" {...cell.getCellProps()}
                    style={{
                      display: "block",
                      fontWeight: 'bold',
                      textAlign: "center",
                      padding: 15.5,
                      borderStyle: 'hidden',
                      backgroundColor: '#e9e9e9',
                    }}
                    >
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableHead>
        </Table>
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
            </TableContainer>
            </Grid>
            </div>
    </>
  );
};

export default TableSafety