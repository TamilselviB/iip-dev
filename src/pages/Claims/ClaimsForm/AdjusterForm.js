import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import { updateClaimStatus } from '../../../Services/claimService';
import { opentoast } from '../../../actions/common';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    padding: 35,
    paddingBottom: theme.spacing(4),
    backgroundColor: '#fff',
  },
  input: {
    margin: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

function AdjusterForm(props) {
  const { claim, adjusters, updatePage } = props;
  const { id } = claim;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      companyname: '',
      fee: '',
      description: '',
    },

    validationSchema: yup.object({
      name: yup.string().required('Required'),
      companyname: yup.string().required('Required'),
      fee: yup.number().required('Required'),
      description: yup.string().required('Required'),
    }),

    onSubmit: async payload => {
      const [adjuster] = adjusters.filter(a => a.username === payload.name);

      const adjusterFormData = {
        status: 'pendingWithAdjuster',
        adjusterId: adjuster.id,
        claimRemarks: payload?.description,
      };

      try {
        await updateClaimStatus(id, adjusterFormData);
        setProcessing(true);
        updatePage();
        dispatch(
          opentoast('success', `Claim send to Adjuster ${payload.name}--${payload.companyname}`),
        );
        updatePage();
      } catch (err) {
        setProcessing(false);
        dispatch(opentoast('warning', `Something Went Wrong`));
      }
    },
  });

  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
        <form>
          <Grid item xs={6}>
            <FormControl
              required
              className={classes.formControl}
              fullWidth
              error={formik.errors.name}
            >
              <InputLabel id="demo-simple-select-label">Loss Adjuster Name</InputLabel>
              <Select
                id="name"
                name="name"
                label="Loss Adjuster Name"
                value={formik.values.name}
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.name ? formik.errors.name : ''}
                error={formik.touched.name && Boolean(formik.errors.name)}
              >
                {adjusters.length > 0 &&
                  adjusters.map(a => <MenuItem value={a.username}>{a.username}</MenuItem>)}
              </Select>
              <FormHelperText error>{formik.errors.name}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl
              className={classes.formControl}
              required
              fullWidth
              error={formik.errors.name}
            >
              <InputLabel id="demo-simple-select-label">Loss Adjuster Company Name</InputLabel>
              <Select
                id="companyname"
                name="companyname"
                label="Loss Adjuster Company Name"
                value={formik.values.companyname}
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.companyname ? formik.errors.companyname : ''}
                error={formik.touched.companyname && Boolean(formik.errors.companyname)}
              >
                {adjusters.length > 0 &&
                  adjusters.map(a => (
                    <MenuItem value={a.company?.companyName}>{a.company?.companyName}</MenuItem>
                  ))}
              </Select>
              <FormHelperText error>{formik.errors.companyname}</FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Loss Adjuster Fee"
              id="fee"
              type="number"
              required
              name="fee"
              value={formik.values.fee}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              helperText={formik.touched.fee ? formik.errors.fee : ''}
              error={formik.touched.fee && Boolean(formik.errors.fee)}
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              label="Remarks"
              name="description"
              required
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              helperText={formik.touched.description ? formik.errors.description : ''}
              error={formik.touched.description && Boolean(formik.errors.description)}
              multiline
              margin="normal"
              fullWidth
              rows={4}
              size="medium"
            />
          </Grid>

          {/* <Grid item xs={6}>
            <TextField
              fullWidth
              label="Net pay"
              id="netpay"
              type="number"
              required
              name="netpay"
              value={formik.values.netpay}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={classes.input}
              helperText={formik.touched.netpay ? formik.errors.netpay : ''}
              error={formik.touched.netpay && Boolean(formik.errors.netpay)}
            />
          </Grid> */}

          <Button
            disabled={processing}
            onClick={formik.handleSubmit}
            style={{
              fontSize: '17px',
              backgroundColor: 'green',
              color: 'white',
              height: '40px',
              width: '100px',
              marginLeft: '10px',
            }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default AdjusterForm;
