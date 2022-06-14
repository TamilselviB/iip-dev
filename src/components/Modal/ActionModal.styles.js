import { makeStyles } from '@material-ui/styles';

// utils
import { pxToRem } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
  colorSuccess: {
    color: theme.palette.success.main,
  },
  feedback: {
    margin: theme.spacing(5, 0, 0, 0),
  },
  note: {
    margin: theme.spacing(1, 0, 3, 0),
  },
  formError: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(24),
    color: theme.palette.error.main,
    margin: theme.spacing(0.5, 0, 0, 1.5),
  },
  dialogContent: {
    padding: theme.spacing(3),
    paddingTop: 0,
  },
  dialogTitle: {
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
  },
}));

export default useStyles;
