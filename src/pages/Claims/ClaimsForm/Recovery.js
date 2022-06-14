import React from 'react';
import { InputLabel, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { TextareaAutosize } from '@material-ui/core';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { updateClaimStatus } from '../../../Services/claimService';
import { opentoast } from '../../../actions/common';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object().shape({
  recovery: Yup.array().of(
    Yup.object().shape({
      cover: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      parties: Yup.string().required('Required'),
      payamount: Yup.number().required('Required'),
      recoverform: Yup.string().required('Required'),
      // others: Yup.string().required('Required'),
      any: Yup.string().required('Required'),
    }),
  ),
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 20,
    padding: theme.spacing(2),
    color: '#000',
    marginBottom: 12,
  },
  icon: {
    fontSize: 30,
    color: '#fff',
    backgroundColor: 'red',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(4.5),
  },
  title: {
    fontWeight: 'bold',
    marginTop: 6,
  },
  input1: {
    fontSize: 16,
    width: 250,
    paddingBottom: theme.spacing(2.5),
    borderRadius: 3,
    borderWidth: 2,
    zIndex: 99,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input2: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(2.5),
    borderRadius: 3,
    borderWidth: 2,
    marginLeft: theme.spacing(4),
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input3: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(2.5),
    marginLeft: theme.spacing(4),
    borderRadius: 3,
    borderWidth: 2,
    minWidth: 120,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input4: {
    fontSize: 16,
    width: 250,
    paddingBottom: theme.spacing(2),
    borderRadius: 3,
    borderWidth: 2,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input5: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(2),
    borderRadius: 3,
    borderWidth: 2,

    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input6: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(2),
    borderRadius: 3,
    borderWidth: 2,
    marginLeft: theme.spacing(6),
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  errorsubmit: {
    color: '#B0001F',
    fontSize: '0.75rem',
    marginTop: -20,
    marginLeft: 36,
  },
  save: {
    backgroundColor: 'blue',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green',
    },
    fontSize: 16,
    marginTop: theme.spacing(2),
    height: '40px',
    width: '120px',
    fontStyle: '17px',
  },
  submit: {
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'green',
    },
    fontSize: 16,
    marginTop: theme.spacing(2),
    height: '40px',
    width: '120px',
    fontStyle: '17px',
  },
  add: {
    backgroundColor: 'purple',
    '&:hover': {
      backgroundColor: 'purple',
    },
    fontSize: 14,
    color: '#fff',
    height: '40px',
    width: '120px',
    fontStyle: '17px',
  },
  delete: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
    },
    fontSize: 14,
    color: '#fff',
    height: '40px',
    width: '120px',
    fontStyle: '17px',
    marginLeft: theme.spacing(120),
  },
}));

const Recovery = ({ claim }) => {
  const { id } = claim;

  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async values => {
    setOpen(false);
    const assessorFormdata = {
      status: 'claimApproved',
      ...values,
    };

    try {
      await updateClaimStatus(id, assessorFormdata);
      dispatch(opentoast('success', 'Submitted Loss Reserve'));
    } catch (err) {
      dispatch(opentoast('warning', 'Something Went Wrong'));
    }
  };

  return (
    <div className={classes.container}>
      <Paper style={{ padding: 20, marginRight: 22, marginLeft: 22 }}>
        <Formik
          initialValues={{
            recovery: [
              {
                cover: '',
                description: '',
                parties: '',
                payamount: '',
                recoverform: '',
                others: '',
                any: '',
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, touched, errors, handleChange, handleBlur, handleSubmit, isValid }) => (
            <Form noValidate autoComplete="off">
              <FieldArray name="recovery">
                {({ push, remove }) => (
                  <div>
                    {values.recovery.map((p, index) => {
                      const cover = `recovery[${index}].cover`;
                      const touchedCover = getIn(touched, cover);
                      const errorCover = getIn(errors, cover);

                      const description = `recovery[${index}].description`;
                      const touchedDescription = getIn(touched, description);
                      const errorDescription = getIn(errors, description);

                      const parties = `recovery[${index}].parties`;
                      const touchedParties = getIn(touched, parties);
                      const errorParties = getIn(errors, parties);

                      const payamount = `recovery[${index}].payamount`;
                      const touchedPayamount = getIn(touched, payamount);
                      const errorPayamount = getIn(errors, payamount);

                      const recoverform = `recovery[${index}].recoverform`;
                      const touchedRecoverFrom = getIn(touched, recoverform);
                      const errorRecoverFrom = getIn(errors, recoverform);

                      const others = `recovery[${index}].others`;
                      const touchedOthers = getIn(touched, others);
                      const errorOthers = getIn(errors, others);

                      const any = `recovery[${index}].any`;
                      const touchedAny = getIn(touched, any);
                      const errorAny = getIn(errors, any);

                      return (
                        <div key={index}>
                          <Grid>
                            <Paper key={index.toString()} className={classes.paper} elevation={6}>
                              <Typography className={classes.title} variant="h5" gutterBottom>
                                Recovery
                              </Typography>
                              <Grid container spacing={1} key={index} style={{ margin: 4 }}>
                                <Grid item xs={3}>
                                  <FormControl variant="outlined" className={classes.input1}>
                                    <InputLabel id="demo-simple-select-label">
                                      Cover Name
                                    </InputLabel>
                                    <Select
                                      label="Cover Name"
                                      name={cover}
                                      value={p.cover}
                                      required
                                      error={Boolean(touchedCover && errorCover)}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <MenuItem value="Fire & Lightning">Fire & Lightning</MenuItem>
                                      <MenuItem value="Water Damage">Water Damage</MenuItem>
                                      <MenuItem value="Earthquake">Earthquake</MenuItem>
                                      <MenuItem value="Storm Tempest Flood">
                                        Storm Tempest Flood
                                      </MenuItem>
                                    </Select>
                                    <Typography
                                      variant="subtitle2"
                                      style={{ color: '#B0001F', fontSize: '0.75rem' }}
                                    >
                                      {errorCover}
                                    </Typography>
                                  </FormControl>
                                </Grid>
                                <Grid item xs={3}>
                                  <FormControl variant="outlined" className={classes.input2}>
                                    <InputLabel id="demo-simple-select-label">Parties</InputLabel>
                                    <Select
                                      label="Parties"
                                      name={parties}
                                      value={p.parties}
                                      required
                                      error={Boolean(touchedParties && errorParties)}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    >
                                      <MenuItem value={1}>Insured</MenuItem>
                                      <MenuItem value={2}>Others</MenuItem>
                                    </Select>
                                    <Typography style={{ color: '#B0001F', fontSize: '0.75rem' }}>
                                      {errorParties}
                                    </Typography>
                                  </FormControl>
                                </Grid>

                                <Grid item xs={3}>
                                  <TextField
                                    variant="outlined"
                                    type="number"
                                    label="Amount"
                                    name={payamount}
                                    placeholder="Amount"
                                    className={classes.input3}
                                    required
                                    value={p.payamount}
                                    error={Boolean(touchedPayamount && errorPayamount)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <Typography className={classes.errorsubmit}>
                                    {errorPayamount}
                                  </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                  <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Recover From"
                                    name={recoverform}
                                    placeholder="Recover From"
                                    className={classes.input3}
                                    required
                                    value={p.recoverform}
                                    error={Boolean(touchedRecoverFrom && errorRecoverFrom)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <Typography className={classes.errorsubmit}>
                                    {errorRecoverFrom}
                                  </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                  <TextareaAutosize
                                    variant="outlined"
                                    name={description}
                                    value={p.description}
                                    required
                                    type="text"
                                    label="Description"
                                    placeholder="Description"
                                    error={Boolean(touchedDescription && errorDescription)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    multiline={false}
                                    rowsMin={5}
                                    style={{
                                      width: 300,
                                      height: 44,
                                      borderWidth: 1,
                                      borderRadius: 3,
                                    }}
                                  />
                                  <Typography style={{ color: '#B0001F', fontSize: '0.75rem' }}>
                                    {errorDescription}
                                  </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                  {p.parties == 2 && (
                                    <TextField
                                      variant="outlined"
                                      name={others}
                                      type="text"
                                      label="Others"
                                      className={classes.input6}
                                      value={p.others}
                                      required
                                      error={Boolean(touchedOthers && errorOthers)}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  )}
                                </Grid>
                              </Grid>
                            </Paper>

                            <Dialog maxWidth="md" open={open} onClose={handleClose}>
                              <DialogContent>
                                <Grid>
                                  <Typography
                                    variant="h6"
                                    style={{ margin: 10, fontWeight: 'bold', marginLeft: 20 }}
                                  >
                                    Do you want to intimate customer ?
                                  </Typography>
                                  <RadioGroup
                                    name={any}
                                    value={p.any}
                                    onChange={handleChange}
                                    style={{ marginLeft: 20 }}
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
                                    <Typography
                                      style={{
                                        color: '#B0001F',
                                        fontSize: '0.75rem',
                                        margin: '10px',
                                      }}
                                    >
                                      {errorAny}
                                    </Typography>
                                  </RadioGroup>
                                </Grid>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  variant="contained"
                                  type="submit"
                                  onClick={handleSubmit}
                                  disabled={!isValid || values.recovery.length === 0}
                                  color="secondary"
                                  className={classes.submit}
                                >
                                  Submit
                                </Button>
                              </DialogActions>
                            </Dialog>

                            <Grid item xs={3}>
                              <Button
                                variant="contained"
                                onClick={() => remove(index)}
                                className={classes.delete}
                              >
                                Delete
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      );
                    })}
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Button
                          variant="contained"
                          onClick={() =>
                            push({
                              cover: '',
                              description: '',
                              parties: '',
                              payamount: '',
                              recoverform: '',
                              others: '',
                            })
                          }
                          className={classes.add}
                          startIcon={<AddIcon />}
                        >
                          Add Row
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                )}
              </FieldArray>

              <Button
                variant="contained"
                onClick={handleOpen}
                color="secondary"
                className={classes.submit}
              >
                Submit Recovery
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </div>
  );
};

export default Recovery;
