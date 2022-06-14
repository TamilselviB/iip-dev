import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { FilePond } from 'react-filepond';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { updateClaimStatus } from '../../../Services/claimService';
import 'filepond/dist/filepond.min.css';
import { opentoast } from '../../../actions/common';
import { bulkUpload } from '../../../utils/utils';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 35,
    paddingBottom: theme.spacing(4),
    backgroundColor: '#fff',
  },
  input: {
    margin: theme.spacing(2),
  },
  upload: {
    marginTop: 15,
  },
  submitBtn: {
    fontSize: '17px',
    backgroundColor: theme.palette.background.iipButton,
    color: 'white',
    height: '40px',
    width: '100px',
    marginLeft: '10px',
  },
}));

function AssessorForm(props) {
  const { claim, updatePage } = props;
  const { id } = claim;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [processing, setProcessing] = useState(false);
  const [files, setFiles] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      remarks: '',
    },

    validationSchema: yup.object({
      remarks: yup.string().required('Required'),
    }),

    onSubmit: async payload => {
      const file = await bulkUpload(files);
      const assessorFormdata = {
        status: 'verifiedByAdjuster',
        adjusterRemarks: payload?.remarks,
        adjusterDocuments: file,
      };

      try {
        await updateClaimStatus(id, assessorFormdata);
        setProcessing(true);
        dispatch(opentoast('success', 'Data uploaded'));
        updatePage();
      } catch (err) {
        setProcessing(false);
        dispatch(opentoast('warning', 'Something Went Wrong'));
      }
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
        <form>
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
              <OutlinedInput
                name="remarks"
                placeholder="Remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.remarks ? formik.errors.remarks : ''}
                error={formik.touched.remarks && Boolean(formik.errors.remarks)}
                endAdornment={
                  <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    style={{
                      width: '0px',
                      height: '38px',
                      marginBottom: '15px',
                      border: 'none',
                      backgroundColor: '#F04763',
                      color: 'white',
                    }}
                  >
                    <MoreHorizIcon style={{ marginTop: '-4px' }} />
                  </Button>
                }
              />
              <Typography style={{ color: '#B0001F', fontSize: '0.75rem' }}>
                {formik.errors.remarks}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FilePond
              ref={files}
              files={files}
              name="files"
              checkValidity={true}
              dropValidation={true}
              allowReorder={true}
              allowMultiple={true}
              onupdatefiles={setFiles}
              required={true}
              labelIdle='Upload files <span class="filepond--label-action">Browse</span>'
            />
          </Grid>

          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Remarks
            </DialogTitle>
            <DialogContent dividers>
              <textarea
                className="form-control"
                name="remarks"
                value={formik.values.remarks}
                onChange={formik.handleChange}
                style={{ height: '340px' }}
                required
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" autoFocus onClick={handleClose} className={classes.submitBtn}>
                Save
              </Button>
            </DialogActions>
          </Dialog>

          <Button
            disabled={processing || claim?.status?.name === 'verifiedByAdjuster'}
            onClick={formik.handleSubmit}
            className={classes.submitBtn}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default AssessorForm;
