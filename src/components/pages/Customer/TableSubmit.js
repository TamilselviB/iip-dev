import React, { useMemo } from 'react';
import { useSortBy, useTable, useGlobalFilter, usePagination } from 'react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
import GlobalFilter from '../../util/GlobalFilter';

const TableSubmit = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: ['quoteId', 'companyId'],
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table
        {...getTableProps()}
        class="table table-borderless"
        style={{ border: '1px solid whitesmoke' }}
      >
        <thead>
          {headerGroups.map(group => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ color: 'black', backgroundColor: 'white' }}
                >
                  {column.render('Header')}
                  &nbsp;&nbsp;{' '}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FontAwesomeIcon icon={faArrowDown} />
                      ) : (
                        <FontAwesomeIcon icon={faArrowUp} />
                      )
                    ) : (
                      ''
                    )}
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
              <tr {...row.getRowProps()} style={{ color: 'black' }}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()} style={{ padding: '0px' }}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page{''}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
          {''}
        </span>
        <span>
          | Go to Page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(pageNumber);
            }}
            style={{ width: '50px', borderColor: 'lightgrey' }}
          />
        </span>
        <label style={{ marginLeft: '670px' }}> Rows Per Page</label>
        <select
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}
          style={{
            borderColor: 'lightgrey',
            height: '30px',
          }}
        >
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        <span>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{
              height: '40px',
              width: '120px',
              backgroundColor: 'white',
              border: 'none',
              marginLeft: '0px',
            }}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              style={{ fontSize: '40px', marginBottom: '-8px' }}
            />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{
              height: '40px',
              width: '120px',
              backgroundColor: 'white',
              border: 'none',
              marginLeft: '-45px',
            }}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ fontSize: '40px', marginBottom: '-8px' }}
            />
          </button>
        </span>
      </div>
    </>
  );
};

export default TableSubmit;
