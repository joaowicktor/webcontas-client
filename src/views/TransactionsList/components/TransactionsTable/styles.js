import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  income: {
    color: '#13B05F'
  },
  expense: {
    color: '#B20000'
  },
  actions: {
    justifyContent: 'flex-end'
  },
  transactionType: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 0
  }
}));
