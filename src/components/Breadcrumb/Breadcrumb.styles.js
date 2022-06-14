import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    fontWeight: 500,
    marginTop: theme.spacing(3),
    marginLeft: '5%',
  },
  crumbLink: {
    color: theme.palette.grey[700],
    textDecoration: 'none',
    textTransform: 'capitalize',
  },
  crumbTextActive: {
    fontWeight: 700,
    color: theme.palette.grey[900],
  },
}));

export default useStyles;
