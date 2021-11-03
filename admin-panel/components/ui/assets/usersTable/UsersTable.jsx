import React, { useContext, useState } from 'react';
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
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    rating: 78,
    image: "photo1.jpg",
    data: [
      {
        year: '2016',
        rating: 77,
      },
      {
        year: '2017',
        rating: 53,

      },
      {
        year: '2018',
        rating: 64,
      },
      {
        year: '2019',
        rating: 74,
      },
      {
        year: '2020',
        rating: 78,
      },
    ]
  },
  {
    name: 'Alison',
    country: 'Australia',
    age: 31,
    member: 2012,
    rating: 33,
    image: "photo2.jpg",
    data: [
      {
        year: '2016',
        rating: 44,
      },
      {
        year: '2017',
        rating: 42,

      },
      {
        year: '2018',
        rating: 45,
      },
      {
        year: '2019',
        rating: 36,
      },
      {
        year: '2020',
        rating: 33,
      },
    ]
  },
  {
    name: 'Peter',
    country: 'UK',
    age: 22,
    member: 2018,
    rating: 82,
    image: "photo3.jpg",
    data: [
      {
        year: '2016',
        rating: 77,
      },
      {
        year: '2017',
        rating: 66,

      },
      {
        year: '2018',
        rating: 74,
      },
      {
        year: '2019',
        rating: 79,
      },
      {
        year: '2020',
        rating: 82,
      },
    ]
  },
  {
    name: 'Teresa',
    country: 'Canada',
    age: 25,
    member: 2011,
    rating: 45,
    image: "photo4.jpg",
    data: [
      {
        year: '2016',
        rating: 46,
      },
      {
        year: '2017',
        rating: 55,

      },
      {
        year: '2018',
        rating: 41,
      },
      {
        year: '2019',
        rating: 49,
      },
      {
        year: '2020',
        rating: 45,
      },
    ]
  },
  {
    name: 'Prya',
    country: 'India',
    age: 29,
    member: 2009,
    rating: 86,
    image: "photo5.jpg",
    data: [
      {
        year: '2016',
        rating: 77,
      },
      {
        year: '2017',
        rating: 66,

      },
      {
        year: '2018',
        rating: 75,
      },
      {
        year: '2019',
        rating: 81,
      },
      {
        year: '2020',
        rating: 86,
      },
    ]
  },
  {
    name: 'Anne',
    country: 'Sweden',
    age: 21,
    member: 2019,
    rating: 74,
    image: "photo2.jpg",
    data: [
      {
        year: '2016',
        rating: 77,
      },
      {
        year: '2017',
        rating: 66,

      },
      {
        year: '2018',
        rating: 79,
      },
      {
        year: '2019',
        rating: 71,
      },
      {
        year: '2020',
        rating: 74,
      },
    ]
  },
];


export default function DataTable() {
  const classes = useStyles();
  const { theme } = useContext(ThemeContext);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [showUserCard, setShowUserCard] = useState(false);
  const [shownUser, setShownUser] = useState();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onTableClick = (row) => {
    setShownUser(row);
    setShowUserCard(true);

  }


  return (
    <>
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.image+row.name} onClick={() => onTableClick(row)} className={classes.row}>
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
      </Paper>
      {showUserCard &&
        <div className={shownUser.rating < 50 ? `${styles.userCard} ${styles.lowRatingUserCard}`
          :
          shownUser.rating < 80 ? `${styles.userCard} ${styles.mediumRatingUserCard}`
            :
            `${styles.userCard} ${styles.highRatingUserCard}`}>
          <div className={styles.cardWrapper}>

            <div className={styles.imageWrapper}>
              <img
                src={"/images/" + shownUser.image}
                alt="Picture of the author"
                quality={100}
              />
            </div>
            <div className={styles.textContainer}>
              <p className={styles.userCardHeader}>{shownUser.name}, {shownUser.age} years old, from {shownUser.country}</p>
              <div>Member since: {shownUser.member}</div>
              <div className={styles.rating}>
                Current rating:
                <div className={shownUser.rating < 50 ? styles.badRating : shownUser.rating < 80 ? styles.goodRating : styles.excellentRating}>
                  {shownUser.rating}
                </div>
              </div>
            </div>

          </div>


          <ResponsiveContainer width="100%" height="60%">
            <LineChart
              width={500}
              height={220}
              data={shownUser.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"year"} fontSize={12}/>
              <YAxis fontSize={12}/>
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="rating" stroke="#FFFFFF" activeDot={{ r: 8 }} />

            </LineChart>
          </ResponsiveContainer>

        </div>
      }

      {!showUserCard &&
        <div className={styles.emptyUserCard}>
          Click on author to view details
        </div>}
    </>
  );
}

const useStyles = makeStyles({
  cell: {
    background: "var(--theme-page-background)",
    color: "var(--theme-page-text)",
    '&:hover': {
      cursor: "pointer !important",
    }
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
