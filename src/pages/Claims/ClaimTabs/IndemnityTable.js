import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { InputLabel, Button, TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { TextareaAutosize } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useFormik } from 'formik';
import { opentoast } from '../../../actions/common';
import { updateClaimStatus } from '../../../Services/claimService';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    marginLeft: -30,
  },
  table: {
    minWidth: 700,
  },
  tablerow: {
    backgroundColor: '#35baf6',
    color: theme.palette.common.white,
    fontSize: 16,
    padding: 0,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'soild',
  },
  tablerow1: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    backgroundColor: '#e9e9e9',
    borderStyle: 'hidden',
  },
  tablerow2: {
    fontSize: 16,
    borderStyle: 'hidden',
  },
  input1: {
    fontSize: 16,
    width: 200,
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
    width: 150,
    paddingBottom: theme.spacing(2.5),
    borderRadius: 3,
    borderWidth: 2,

    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input3: {
    fontSize: 16,
    width: 200,
    paddingBottom: theme.spacing(4),
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
    width: 150,
    paddingBottom: theme.spacing(2),
    borderRadius: 3,
    borderWidth: 2,
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  add: {
    backgroundColor: 'purple',
    '&:hover': {
      backgroundColor: 'purple',
    },
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
    height: '40px',
    marginLeft: theme.spacing(120),
    width: '120px',
    fontStyle: '17px',
  },

  errorsubmit: {
    color: '#B0001F',
    fontSize: '0.75rem',
    marginTop: -20,
    marginLeft: 3,
  },
  icon: {
    color: 'red',
    fontSize: 30,
    marginTop: -20,
  },
  submitBtn: {
    fontSize: '17px',
    backgroundColor: theme.palette.background.iipButton,
    color: 'white',
    height: '40px',
    width: '100px',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(120),
  },
}));

const validationSchema = Yup.object().shape({
  lossReserve: Yup.array().of(
    Yup.object().shape({
      cover: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      parties: Yup.string().required('Required'),
      payamount: Yup.string().required('Required'),
      // others: Yup.string().required('Required'),
    }),
  ),
});

function IndemnityTable({ claimid, updatePage }) {
  console.log('------>', claimid);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [reserve, setReserve] = React.useState([]);
  const dispatch = useDispatch();

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

    validationSchema: Yup.object({
      any: Yup.string().required('Required'),
    }),

    onSubmit: async data => {
      console.log(data);
      setOpen(false);
      const assessorFormdata = {
        ...reserve,
        status: 'claimApproved',
      };

      try {
        await updateClaimStatus(claimid, assessorFormdata);
        updatePage();
        dispatch(opentoast('success', 'Claim Approved'));
      } catch (err) {
        dispatch(opentoast('warning', 'Something Went Wrong'));
      }
    },
  });
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Formik
          initialValues={{
            lossReserve: [
              {
                cover: '',
                description: '',
                parties: '',
                payamount: '',
                others: '',
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={values => {
            setReserve(values);
            setOpen(true);
          }}
        >
          {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
            <Form noValidate autoComplete="off">
              <FieldArray name="lossReserve">
                {({ push, remove }) => (
                  <div>
                    <Button
                      className={classes.button}
                      type="button"
                      variant="outlined"
                      onClick={() => {
                        push({
                          cover: '',
                          description: '',
                          parties: '',
                          payamount: '',
                          others: '',
                        });
                      }}
                      className={classes.add}
                      startIcon={<AddIcon />}
                    >
                      Add
                    </Button>
                    <TableContainer
                      component={Paper}
                      elevation={12}
                      style={{ display: 'table-caption' }}
                    >
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" className={classes.tablerow}>
                              ID
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Cover Name
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Parties
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Amount
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Description
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {values.lossReserve.map((p, index) => {
                            const cover = `lossReserve[${index}].cover`;
                            const touchedCover = getIn(touched, cover);
                            const errorCover = getIn(errors, cover);

                            const description = `lossReserve[${index}].description`;
                            const touchedDescription = getIn(touched, description);
                            const errorDescription = getIn(errors, description);

                            const parties = `lossReserve[${index}].parties`;
                            const touchedParties = getIn(touched, parties);
                            const errorParties = getIn(errors, parties);

                            const payamount = `lossReserve[${index}].payamount`;
                            const touchedPayamount = getIn(touched, payamount);
                            const errorPayamount = getIn(errors, payamount);

                            const others = `lossReserve[${index}].others`;
                            const touchedOthers = getIn(touched, others);
                            const errorOthers = getIn(errors, others);

                            return (
                              <TableRow key={index}>
                                <TableCell className={classes.tablerow2}>{index + 1}</TableCell>
                                <TableCell className={classes.tablerow2}>
                                  <FormControl variant="outlined" className={classes.input1}>
                                    <InputLabel id="demo-simple-select-label">
                                      Cover Name
                                    </InputLabel>
                                    <Select
                                      label="Cover Name"
                                      name={cover}
                                      value={p.cover}
                                      required
                                      helperText={touchedCover && errorCover ? errorCover : ''}
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
                                    <Typography style={{ color: '#B0001F', fontSize: '0.75rem' }}>
                                      {errorCover}
                                    </Typography>
                                  </FormControl>
                                </TableCell>

                                <TableCell align="center" className={classes.tablerow2}>
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
                                    <Typography
                                      style={{
                                        color: '#B0001F',
                                        fontSize: '0.75rem',
                                        marginRight: 135,
                                      }}
                                    >
                                      {errorParties}
                                    </Typography>
                                  </FormControl>

                                  {p.parties == 2 && (
                                    <TextField
                                      variant="outlined"
                                      name={others}
                                      type="text"
                                      label="Others"
                                      className={classes.input6}
                                      value={p.others}
                                      required
                                      helperText={touchedOthers && errorOthers ? errorOthers : ''}
                                      error={Boolean(touchedOthers && errorOthers)}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                    />
                                  )}
                                </TableCell>
                                <TableCell align="center" className={classes.tablerow2}>
                                  <TextField
                                    variant="outlined"
                                    type="number"
                                    label="Amount"
                                    name={payamount}
                                    placeholder="Amount"
                                    className={classes.input3}
                                    value={p.payamount}
                                    required
                                    error={Boolean(touchedPayamount && errorPayamount)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                  />
                                  <Typography className={classes.errorsubmit}>
                                    {errorPayamount}
                                  </Typography>
                                </TableCell>
                                <TableCell align="center" className={classes.tablerow2}>
                                  <TextareaAutosize
                                    variant="outlined"
                                    name={description}
                                    value={p.description}
                                    required
                                    type="text"
                                    placeholder="Description"
                                    error={Boolean(touchedDescription && errorDescription)}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    multiline={true}
                                    rows={4}
                                    wrap="hard"
                                    style={{
                                      width: 280,
                                      height: 44,
                                      marginTop: -14,
                                      lineHeight: 1,
                                      borderWidth: 1,
                                      marginLeft: -8,
                                      borderRadius: 3,
                                    }}
                                  />
                                  <Typography
                                    variant="subtitle2"
                                    style={{
                                      color: '#B0001F',
                                      fontSize: '0.75rem',
                                      marginRight: 245,
                                    }}
                                  >
                                    {errorDescription}
                                  </Typography>
                                </TableCell>

                                <TableCell
                                  align="center"
                                  className={classes.tablerow2}
                                  sortDirection="desc"
                                >
                                  <IconButton
                                    aria-label="delete"
                                    onClick={() => remove(index)}
                                    size="medium"
                                  >
                                    <DeleteIcon className={classes.icon} />
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                )}
              </FieldArray>

              <Button
                className={classes.submitBtn}
                type="submit"
                color="secondary"
                variant="contained"
                disabled={!isValid || values.lossReserve.length === 0}
              >
                submit
              </Button>
            </Form>
          )}
        </Formik>
        <Dialog
          maxWidth="md"
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Grid>
              <Typography variant="h6" style={{ margin: 10, fontWeight: 'bold', marginLeft: 20 }}>
                Do you want to intimate customer ?
              </Typography>
              <RadioGroup
                name="any"
                value={formik.values.any}
                onChange={formik.handleChange}
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
                  variant="subtitle2"
                  style={{ color: '#B0001F', fontSize: '0.75rem', margin: '10px' }}
                >
                  {formik.errors.any}
                </Typography>
              </RadioGroup>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={formik.handleSubmit}
              type="submit"
              color="secondary"
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </div>
  );
}

export default IndemnityTable;
