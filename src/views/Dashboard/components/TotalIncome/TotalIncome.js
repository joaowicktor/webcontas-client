import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddCircleIcon from '@material-ui/icons/AddCircle';

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
    backgroundColor: theme.palette.success.main,
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
    color: theme.palette.success.dark,
    marginRight: theme.spacing(0.5)
  },
  differenceValue: {
    color: theme.palette.success.dark,
    marginLeft: theme.spacing(0.5)
  },
  caption: {
    fontSize: 12
  }
}));

const TotalIncome = props => {
  const { className, amount, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between" >
          <Grid item>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
              RECEITAS
            </Typography>
            <Typography variant="h3">
              <NumberFormat
                isNumericString
                value={amount.paid[0].total}
                displayType={'text'}
                thousandSeparator={'.'}
                decimalSeparator={','}
                prefix={'R$ '}
              />
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <AddCircleIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
        <div className={classes.difference}>
          <AddCircleIcon className={classes.differenceIcon} fontSize="small"/>
          <Typography className={classes.caption} variant="caption">
            Receita prevista:
            <NumberFormat
              className={classes.differenceValue}
              isNumericString
              value={amount.all[0].total}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'R$ '}
            />
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TotalIncome.propTypes = {
  className: PropTypes.string
};

export default TotalIncome;
