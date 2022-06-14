import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Indemnity from './ClaimsForm/Indemnity';
import Recovery from './ClaimsForm/Recovery';
import { opentoast } from '../../actions/common';
import { updateClaimStatus } from '../../Services/claimService';
import ClaimTabs from './ClaimTabs/ClaimTabs';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  alert: {
    padding: 30,
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    color: '#fff',
  },
  paper: {
    marginTop: 20,
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: '#000',
    marginBottom: 12,
  },
  approve: {
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#000',
    },
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff',
    fontSize: 16,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(0),
  },
  input: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(2),
    borderRadius: 3,
    borderWidth: 2,
    margin: 2,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  save: {
    backgroundColor: 'blue',
    '&:hover': {
      backgroundColor: 'blue',
    },
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff',
    fontSize: 16,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  submit: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff',
    fontSize: 16,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  submitModal: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    color: '#fff',
    fontSize: 16,
    marginLeft: theme.spacing(33),
  },
}));

function ClaimAmount({ claim, updatePage }) {
  const { id } = claim;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [Addindemnity, setAddindemnity] = React.useState(false);
  const [Addrecovery, setAddrecovery] = React.useState(false);

  const addindemnity = () => {
    setAddindemnity(true);
  };
  const addrecovery = () => {
    setAddrecovery(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      any: '',
    },

    validationSchema: yup.object({
      any: yup.string().required('Required'),
    }),

    onSubmit: async data => {
      console.log(data);
      setOpen(false);
      const assessorFormdata = {
        ...data,
        status: 'claimApproved',
      };
      console.log(assessorFormdata);
      try {
        await updateClaimStatus(id, assessorFormdata);
        updatePage();
        dispatch(opentoast('success', 'Claim Approved'));
      } catch (err) {
        dispatch(opentoast('warning', 'Something Went Wrong'));
      }
    },
  });

  return (
    <div className={classes.root}>
      <ClaimTabs />

      {(Addindemnity || Addrecovery) && (
        <div>
          {/* <Button variant="contained" className={classes.save}>
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            type="submit"
            color="secondary"
            className={classes.submit}
          >
            Submit
          </Button> */}
        </div>
      )}
    </div>
  );
}

export default ClaimAmount;
