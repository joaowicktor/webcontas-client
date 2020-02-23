import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import NumberFormat from 'react-number-format';
import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const TransactionsTable = props => {
  const { className, transactions, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell>Lançamento</TableCell>
                  <TableCell>Valor</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Conta</TableCell>
                  <TableCell>Pago?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions ? transactions.map(transaction => (
                  <TableRow className={classes.tableRow} hover key={transaction.id}>
                    <TableCell padding="checkbox" className={classes.transactionType}>
                    {!transaction.is_expense ? <AddCircleIcon className={classes.income} /> : <RemoveCircleIcon className={classes.expense} />}
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography variant="body1">{transaction.description}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <NumberFormat
                        isNumericString
                        value={transaction.amount}
                        displayType={'text'}
                        decimalSeparator={','}
                        prefix={!transaction.is_expense ? 'R$ ' : 'R$ -'}
                      />
                    </TableCell>
                    <TableCell>{new Date(transaction.occurrence_date).toLocaleDateString()}</TableCell>
                    <TableCell>{transaction.category.name}</TableCell>
                    <TableCell>{transaction.account.name}</TableCell>
                    <TableCell>{transaction.is_paid ? <ThumbUpIcon className={classes.income} /> : <ThumbDownIcon className={classes.expense} />}</TableCell>
                  </TableRow>
                )) : null}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

export default TransactionsTable;
