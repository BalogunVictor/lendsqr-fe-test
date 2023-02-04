import './table.scss'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react';
// import { fetchData, Users } from './FetchData'
// import { useQuery } from 'react-query'

type Users = {
  organization: string
  Username: string
  Email: string
  Phone_number: string
  Date_joined: string
  Status: string
}


const defaultData: Users[] = [
    {
      organization: "Lendsqr",
      Username: "Adedeji",
      Email:"adedeji@lendsqr.com",
      Phone_number: "08078903721",
      Date_joined: "May 15, 2020 10:00 AM",
      Status: "Inactive"
    },
    {
      organization: "Lendsqr",
      Username:"Adedeji",
      Email:"adedeji@lendsqr.com",
      Phone_number: "08078903721",
      Date_joined:"May 15, 2020 10:00 AM",
      Status:"Inactive"
    },
    {
      organization:"Lendsqr",
      Username: "Adedeji",
      Email:"adedeji@lendsqr.com",
      Phone_number:"08078903721",
      Date_joined:"May 15, 2020 10:00 AM",
      Status:"Inactive"
    },
    {
      organization:"Lendsqr",
      Username:"Adedeji",
      Email:"adedeji@lendsqr.com",
      Phone_number:"08078903721",
      Date_joined:"May 15, 2020 10:00 AM",
      Status:"Inactive"
    },
    {
      organization: 'Lendsqr',
      Username:"Adedeji",
      Email:"adedeji@lendsqr.com",
      Phone_number:"08078903721",
      Date_joined:"May 15, 2020 10:00 AM",
      Status:"Inactive"
    }
]

const columnHelper = createColumnHelper<Users>()

const columns = [
  columnHelper.accessor('organization', {
    header: 'organization',
  }),
  columnHelper.accessor('Username', {
    header: 'Username',
  }),
  columnHelper.accessor('Email', {
    header: 'Email',
  }),
  columnHelper.accessor('Phone_number', {
    header: 'Phone number',
    
  }),
  columnHelper.accessor('Date_joined', {
    header: 'Date joined',
  }),
  columnHelper.accessor('Status', {
    header: 'Status',
  }),

]
export const Table = () => {
  const [data, setData] = useState(() => [...defaultData])

  // const [{ pageIndex, pageSize }, setPagination] =
  // React.useState<PaginationState>({
  //   pageIndex: 0,
  //   pageSize: 10,
  // })

  // const fetchDataOptions = {
  //   pageIndex,
  //   pageSize,
  // }

  // const dataQuery = useQuery(
  //   ['data', fetchDataOptions],
  //   () => fetchData(fetchDataOptions),
  //   { keepPreviousData: true }
  // )


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className='tableContainer'>
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
      </table>
    </div>
  )
}





// import {useMemo} from 'react'
// import { useTable, } from "@tanstack/react-table"
// import MOCK_DATA from './MOCK_DATA.json'
// import {COLUMNS} from './colums'





  // const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => MOCK_DATA, [])

  //  const tableInstance = useTable({
  //     columns,
  //     data,
  //  })

 
