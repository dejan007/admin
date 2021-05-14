import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import styles from './users-table.module.scss';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 33 },
  { id: 2, lastName: 'Sparrow', firstName: 'Jack', age: 42 },
  { id: 3, lastName: 'Damon', firstName: 'Matt', age: 45 },
  { id: 4, lastName: 'Diesel', firstName: 'Vin', age: 16 },
  { id: 5, lastName: 'Pacino', firstName: 'Al', age: 44 },
  { id: 6, lastName: 'Sheen', firstName: 'Charlie', age: 150 },
  { id: 7, lastName: 'Safet', firstName: 'Safet', age: 44 },
  { id: 8, lastName: 'Robbins', firstName: 'Tim', age: 36 },
  { id: 9, lastName: 'Lindsey', firstName: 'Sam', age: 65 },
];

export default function DataTable() {
  return (
    <div className={styles.tableWrapper}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
