import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import styles from './users-table.module.scss';
import ThemeContext from '../../../../contexts/ThemeContext';


const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 100 },
  {
    id: 'age',
    label: 'Age',
    minWidth: 170,
    align: 'right',

  },
  {
    id: 'member',
    label: 'Member since',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'rating',
    label: 'Rating',
    minWidth: 170,
    align: 'right',
  },
];

const rows = [
  {
    name: 'Jack',
    country: 'USA',
    age: 34,
    member: 2005,
    rating: 78
  },
  {
    name: 'Alison',
    country: 'Australia',
    age: 31,
    member: 2012,
    rating: 73
  },
  {
    name: 'Peter',
    country: 'UK',
    age: 22,
    member: 2018,
    rating: 82
  },
  {
    name: 'Ted',
    country: 'Canada',
    age: 25,
    member: 2011,
    rating: 728
  },
  {
    name: 'Suresh',
    country: 'India',
    age: 29,
    member: 2009,
    rating: 86
  },
  {
    name: 'Anne',
    country: 'Sweden',
    age: 21,
    member: 2019,
    rating: 79
  },
];



export default function DataTable() {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <Paper >
      <TableContainer className={styles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={`${classes.cell} ${theme}`}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}  className={`${classes.cell} ${theme}`}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const useStyles = makeStyles({
  cell: {
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)",
  },
  head: {
    fontWeight: '600',
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)"
  },
  pagination: {
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)"
  }
});
