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
import styles from './order-table.module.scss';
import ThemeContext from '../../../contexts/ThemeContext';



const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Code', minWidth: 100 },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

const rows = [
  { name: "John", code: "345611", location: "London", price: "344$", status: <span className={styles.shipped}>SHIPPED</span> },
  { name: "Eric", code: "321100", location: "New York", price: "123$", status: <span className={styles.ready}>READY</span> },
  { name: "Maria", code: "773321", location: "Belgrade", price: "221$", status: <span className={styles.delivered}>DELIVERED</span> },
  { name: "Tom", code: "112252", location: "Prague", price: "1344$", status: <span className={styles.failed}>FAILED</span> },
  { name: "Alice", code: "34111", location: "Nice", price: "2224$", status: <span className={styles.shipped}>SHIPPED</span> },
  { name: "Matt", code: "2200885", location: "Paris", price: "344$", status: <span className={styles.ready}>READY</span> }
];

function OrderTable() {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();
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
    <Paper className={`${classes.root} ${theme}`}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={`${classes.head} ${theme}`}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} className={`${classes.cell} ${theme}`}>
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
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className={`${classes.pagination} ${theme}`}
      />
    </Paper>
  );
}

const useStyles = makeStyles({
  root: {
    width: '95%',
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)"
  },
  container: {
    maxHeight: 440,
  },
  cell: {
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)",
    '&:hover': {
      background: 'gray',
      color: 'white',
    },

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

export default OrderTable;