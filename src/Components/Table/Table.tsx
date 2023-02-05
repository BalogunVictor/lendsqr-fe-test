import './table.scss'
import { useState,useReducer, useEffect } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import axios from 'axios'

type Person = {
  orgName: any
  userName: any
  email: any
  phoneNumber: any
  createdAt: any
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('orgName', {
    cell: info => info.getValue(),
    header: () => 'organization',
  }),
  columnHelper.accessor('userName', {
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>UserName</span>,
  }),
  columnHelper.accessor('email', {
    header: () => 'email',
    cell: info => info.renderValue(),
  }),
  columnHelper.accessor('phoneNumber', {
    header: 'Phone Number',
  }),
  columnHelper.accessor('createdAt', {
    header: () => <span>Date joined</span>,
  }),

]

export const Table = () => {
  const [user,setUser] = useState<any>([])

  const fetchUsers = async () => {

    const response = await axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => {
        setUser(response.data)
      });

  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(user);

  const table = useReactTable({
    data:user,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}