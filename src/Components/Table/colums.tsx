import { Column } from "react-table";

export const COLUMNS : Column[]= [ 
  {
    Header: 'id',
    accessor: 'id'
  },
  {
    Header: 'organization',
    accessor: 'organization'
  },
  {
    Header: 'Username',
    accessor: 'Username'
  },
  {
    Header: 'Email',
    accessor: 'Email',
    
  },
  {
    Header: 'Phone number',
    accessor: 'Phone_number'
  },
  {
    Header: 'Date joined',
    accessor: 'Date_joined'
  },
  {
    Header: 'Status',
    accessor: 'Status'
  },
]