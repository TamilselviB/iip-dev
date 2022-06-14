import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { InputLabel, Button, TextField, TextareaAutosize } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

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
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderColor: 'black',
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
    padding: '0px',
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
    marginLeft: theme.spacing(-2),
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
    paddingBottom: theme.spacing(2),
    marginLeft: theme.spacing(-2),
    borderRadius: 3,
    borderWidth: 2,

    '&::placeholder': {
      textOverflow: 'ellipsis !important',
    },
  },
  input3: {
    fontSize: 16,
    width: 150,
    paddingBottom: theme.spacing(4),
    marginLeft: theme.spacing(-2),
    borderRadius: 3,
    borderWidth: 2,
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
    marginLeft: -14,
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
    marginLeft: theme.spacing(120),
    height: '40px',
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
    marginLeft: -25,
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
  recovery: Yup.array().of(
    Yup.object().shape({
      cover: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      parties: Yup.string().required('Required'),
      payamount: Yup.string().required('Required'),
      recoverform: Yup.string().required('Required'),
      // others: Yup.string().required('Required'),
    }),
  ),
});

function RecoveryTable({ claimid, updatePage }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Grid container xs={14}>
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
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={async values => {
            try {
              await updateClaimStatus(claimid, values);
              updatePage();
              dispatch(opentoast('success', 'Claim Approved'));
            } catch (err) {
              dispatch(opentoast('warning', 'Something Went Wrong'));
            }
          }}
        >
          {({ values, touched, errors, handleChange, handleBlur, isValid }) => (
            <Form noValidate autoComplete="off">
              <FieldArray name="recovery">
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
                              Recovery From
                            </TableCell>
                            <TableCell align="center" className={classes.tablerow}>
                              Description
                            </TableCell>
                            <TableCell
                              align="center"
                              className={classes.tablerow}
                              sortDirection="desc"
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
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

                            return (
                              <TableRow key={p.id}>
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
                                        marginRight: 170,
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
                                      width: 250,
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
                                      marginLeft: -217,
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
                disabled={!isValid || values.recovery.length === 0}
              >
                submit
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </div>
  );
}

export default RecoveryTable;
