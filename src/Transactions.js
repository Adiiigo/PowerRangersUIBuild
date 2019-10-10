import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'account_ID', label: 'Account_ID', minWidth: 170 },
  { id: 'Tran_date', label: 'Transaction Date', minWidth: 100 }, 
  { id: 'transaction_type', label: 'Transaction Type', minWidth: 100 }, 
  { id: 'debit', label: 'Debit', minWidth: 100 }, 
  { id: 'credit', label: 'Credit', minWidth: 100 }, 
  {
    id: 'NGO_contribution',
    label: 'Contribution to Go Green',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'actual_transaction',
    label: 'Net Transaction',
    minWidth: 170,
    align: 'right',
    format: value => value.toFixed(2),
  },
];
var rowss=new Array();

function createData(account_ID, Tran_date, transaction_type, debit,credit,NGO_contribution,actual_transaction) {
 
  return { account_ID, Tran_date, transaction_type, debit,credit,NGO_contribution,actual_transaction };
}

const rows = [
  createData('10001', '1/09/2019', 'sampletx1', '11','0','0.8','10.2','10089'),
  createData('10001', '10/09/2019', 'sampletx2', '0','50','0','50','10139'),
  createData('10001', '15/09/2019', 'Contribution towards NGO', '100','0','100','0','10039'),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function Transactions() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}