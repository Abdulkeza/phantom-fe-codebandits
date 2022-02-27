import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalFilter, usePagination, useTable } from 'react-table';
import driversDB from '../database/driversDB.json';
import Button from './Button.js';
import ManageDropdown from './ManageDropdown.js';
import SearchFilter from './SearchFilter.js';
import CheckRole from './utils/CheckRoles.js';

const tableColumns = [
  {
    Header: 'Names',
    accessor: 'name'
  },
  {
    Header: 'Email',
    accessor: 'email'
  },
  {
    Header: 'License',
    accessor: 'license'
  },
  {
    Header: 'Assigned Bus',
    accessor: 'assigned_bus'
  },
  {
    Header: 'Assigned Route',
    accessor: 'assigned_route'
  },
  {
    Header: 'Management',
    accessor: 'management',
    Cell: ({ row }) => <ManageDropdown id={row.original.email} />
  }
];

const DriversTable = () => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => driversDB, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    pageOptions,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <section className="flex justify-between content-center pb-7">
        <SearchFilter
          filter={globalFilter}
          setfilter={setGlobalFilter}
          placeholder="Search Drivers..."
        />
        <CheckRole
          children={
            <Link to="/dashboard/driver/register">
              <Button
                name={'Register new'}
                styles={'bg-primary text-white py-1 text-xs'}
              />
            </Link>
          }
          role={['operator']}
        ></CheckRole>
      </section>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="pb-10 ">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="text-left font-extrabold pr-5 border-b-2 pb-4"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="pr-5 py-4 border-b-2"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr className="pagination mt-3 pt-3">
            <td colSpan={5}>
              <div className="w-full justify-end">
                <button
                  className="mr-2"
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {'<<'}
                </button>{' '}
                <button
                  className="mr-2"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>{' '}
                <button
                  className="mr-2"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>{' '}
                <button
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {'>>'}
                </button>{' '}
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                      const pageNumber = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      gotoPage(pageNumber);
                    }}
                    style={{ width: '50px' }}
                  />
                </span>{' '}
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default DriversTable;
