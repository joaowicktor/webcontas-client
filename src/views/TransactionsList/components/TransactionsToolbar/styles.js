import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  title: {
    marginRight: theme.spacing(2)
  },
  spacer: {
    flexGrow: 1
  },
  income: {
    color: '#13B05F'
  },
  expense: {
    color: '#B20000'
  },
}));
