// import {useMemo} from 'react'
// import { useTable } from "react-table"
// import MOCK_DATA from './MOCK_DATA.json'
// import {COLUMNS} from './colums'

// type dataProps = {
//   id: number;
//   organization: string;
//   Username: string;
//   Email: string;
//   Phone_number: string;
//   Date_joined: string;
//   Status: string;
// }[]

// type ColumnsProps = {
//   Header: string;
//   accessor: string;
// }[]


export const Table = () => {

//   const columns = useMemo(() => COLUMNS, [])
//   const data = useMemo(() => MOCK_DATA, [])

//    const tableInstance = useTable({
//       columns,
//       data,
//    })

//    const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     rows,
//     prepareRow,
//    } = tableInstance
  
//   return (
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//         <tr {...headerGroup.getHeaderGroupProps()}>
//           {headerGroup.headers.map(column => (
//           <th {...column.getHeaderGroupProps()}>{column.render('Header')}</th>
//           ))}
//         </tr>
//         ))}
//       </thead>

//       <tbody {...getTableBodyProps}>
//         {
//           rows.map(row => {
//             prepareRow(row)
//             return  (
//               <tr {...row.getRowProps()}>
//                {row.cells.map((cell) => {
//                 return <td {...cell.getCellProps}>{cell.render('Cell')}</td>
//                })}
//               </tr>
//             )
//           })
//         }
//       </tbody>

//     </table>
//   )
}
