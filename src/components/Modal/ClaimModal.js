import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tooltip from '@material-ui/core/Tooltip';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { requestClaim } from '../../Services/claimService';
import { opentoast } from '../../actions/common';
import { bulkUpload } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginLeft: theme.spacing(-1),
    marginRight: theme.spacing(0),
    color: '#000',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  error: {
    color: '#B0001F',
    fontSize: '0.75rem',
  },
  submit: {
    fontSize: '17px',
    backgroundColor: '#F04763',
    '&:hover': {
      backgroundColor: '#F04763',
    },
    marginLeft: theme.spacing(86),
    color: 'white',
    height: '40px',
    width: '120px',
  },
}));

const ClaimModal = ({ id, userId, companyId, riskDetails }) => {
  console.log('id', id, userId, companyId);

  const classes = useStyles();

  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);
  console.log('----->', files);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      any: '',
      cover: '',
      lossDiscoveryDate: '',
      lossdate: '',
      description: '',
    },

    validationSchema: yup.object({
      any: yup.string().required('Required'),
      cover: yup.string().required('Required'),
      lossDiscoveryDate: yup.string().required('Required'),
      lossdate: yup.string().required('Required'),
      description: yup.string().required('Required'),
    }),

    onSubmit: async data => {
      const { description, lossdate, lossDiscoveryDate, cover } = data;
      const file = await bulkUpload(files);
      console.log(file);
      const claimObject = {
        policyId: id,
        userId,
        companyId,
        riskDetails: [cover],

        claimIntimationDate: lossDiscoveryDate,
        lossDate: lossdate,
        descriptionOfLoss: description,
        documents: file,
      };

      try {
        const res = await requestClaim(claimObject);
        dispatch(opentoast('success', `Your claim reference no is: ${res.claimRefNumber}`));
        setOpen(false);
      } catch (err) {
        setOpen(false);
      }
    },
  });

  return (
    <div>
      <Tooltip title="Report a loss">
        <Button onClick={handleClickOpen} variant="contained" color="primary">
          Report a loss
        </Button>
      </Tooltip>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          style={{ backgroundColor: 'rgb(39, 39, 62)', color: '#fff' }}
        >
          Report a loss
        </DialogTitle>

        <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <Paper elevation={0} className={classes.paper}>
          <Grid container spacing={3}>
            <Typography style={{ margin: 8, fontWeight: 'bold', marginLeft: 20 }}>
              Any injuries / damages to Third Parties
            </Typography>
            <RadioGroup
              name="any"
              value={formik.values.any}
              onChange={formik.handleChange}
              style={{ display: 'inline-block' }}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio style={{ color: '#000' }} />}
                label="Yes"
              />
              <FormControlLabel
                value="No"
                control={<Radio style={{ color: '#000' }} />}
                label="No"
              />
            </RadioGroup>
            <Typography className={classes.error}>{formik.errors.any}</Typography>
          </Grid>
        </Paper>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography style={{ fontWeight: 'bold' }}>Risks Associated For:</Typography>
              <Select
                variant="outlined"
                fullWidth={true}
                id="cover"
                name="cover"
                value={formik.values.cover}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.cover ? formik.errors.cover : ''}
                error={formik.touched.cover && Boolean(formik.errors.cover)}
              >
                {riskDetails &&
                  riskDetails.length > 0 &&
                  riskDetails.map(risk => (
                    <MenuItem
                      value={`${risk.propertyName} ${risk.subsidiaryCompany}`}
                    >{`${risk.propertyName} ${risk.subsidiaryCompany}`}</MenuItem>
                  ))}
              </Select>
              <Typography className={classes.error}>{formik.errors.cover}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                Loss Discovery Date:
              </Typography>
              <TextField
                type="date"
                fullWidth={true}
                variant="outlined"
                id="lossDiscoveryDate"
                name="lossDiscoveryDate"
                value={formik.values.lossDiscoveryDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.lossDiscoveryDate ? formik.errors.lossDiscoveryDate : ''}
                error={formik.touched.lossDiscoveryDate && Boolean(formik.errors.lossDiscoveryDate)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '-20px' }}>
                Tentative Loss Date:
              </Typography>
              <TextField
                type="date"
                fullWidth={true}
                variant="outlined"
                id="lossdate"
                name="lossdate"
                value={formik.values.lossdate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.lossdate ? formik.errors.lossdate : ''}
                error={formik.touched.lossdate && Boolean(formik.errors.lossdate)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '-18px' }}>
                Description of loss:
              </Typography>
              <TextareaAutosize
                rowsMin={4}
                style={{ width: 400, height: 92 }}
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.description ? formik.errors.description : ''}
                error={formik.touched.description && Boolean(formik.errors.description)}
              />
              <Typography className={classes.error}>{formik.errors.description}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '-65px' }}>
                Upload Files:
              </Typography>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button className={classes.submit} onClick={formik.handleSubmit}>
            Report Claim
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ClaimModal;
