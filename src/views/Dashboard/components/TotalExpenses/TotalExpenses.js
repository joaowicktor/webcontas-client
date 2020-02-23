import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(0.5)
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginLeft: theme.spacing(0.5)
  },
  caption: {
    fontSize: 12
  }
}));

const TotalExpenses = props => {
  const { className, amount, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
              DESPESAS
            </Typography>
            <Typography variant="h3">
              <NumberFormat
                isNumericString
                value={amount.paid[1].total}
                displayType={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'R$ -'}
              />
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <RemoveCircleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <RemoveCircleIcon className={classes.differenceIcon} fontSize="small"/>
          <Typography className={classes.caption} variant="caption">
            Despesa prevista:
            <NumberFormat
              className={classes.differenceValue}
              isNumericString
              value={amount.all[1].total}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'R$ -'}
            />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TotalExpenses.propTypes = {
  className: PropTypes.string
};

export default TotalExpenses;
