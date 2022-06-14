import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, TextareaAutosize } from '@material-ui/core';
import { Formik, Field, Form, FieldArray } from 'formik';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { FilePond } from 'react-filepond';
import AddIcon from '@material-ui/icons/Add';

const initialValues = {
  policy: [
    {
      translator: '',
      legalnotes: '',
      upload: '',
    },
  ],
};

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
    textAlign: 'left',
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

function LegalProcess() {
  const [files, setFiles] = React.useState([]);
  const classes = useStyles();
  const [cover, setCover] = React.useState('cover');
  const riskChange = event => {
    setCover(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper style={{ padding: 20, marginRight: 22, marginLeft: 22 }}>
        <Formik
          initialValues={initialValues}
          validate={() => ({ foo: true })}
          onSubmit={values => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
          render={({ values, errors, touched, handleReset }) => {
            console.group('formik');
            console.log('touched', touched);
            console.log('values', values);
            console.groupEnd('formik');
            return (
              <Form>
                <FieldArray
                  name="policy"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.policy.length > 0 &&
                        values.policy.map((policy, index) => (
                          <Paper key={index.toString()} className={classes.paper} elevation={6}>
                            <Typography className={classes.title} variant="h5" gutterBottom>
                              Legal Process
                            </Typography>
                            <Grid container spacing={1} key={index} style={{ margin: 4 }}>
                              <Grid item xs={3}>
                                <Field
                                  component={TextField}
                                  variant="outlined"
                                  name={`policy.${index}.translator`}
                                  type="number"
                                  placeholder="Assigning Translator"
                                  className={classes.input1}
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <Field
                                  variant="outlined"
                                  component={TextareaAutosize}
                                  name={`policy.${index}.legalnotes`}
                                  type="text"
                                  label=" Legal notes"
                                  placeholder=" Legal notes"
                                  multiline={false}
                                  rowsMin={4}
                                  style={{
                                    width: 320,
                                    height: 44,
                                    borderWidth: 1,
                                    borderRadius: 3,
                                  }}
                                />
                              </Grid>

                              <Grid item xs={4}>
                                <FilePond
                                  className={classes.upload}
                                  files={files}
                                  name={`policy.${index}.upload`}
                                  styleButtonProcessItemPosition="right"
                                  checkValidity
                                  dropValidatiod
                                  allowReorder
                                  allowMultiple
                                  onupdatefiles={setFiles}
                                  required
                                  labelIdle='Upload Documents <span class="filepond--label-action">Browse</span>'
                                />
                              </Grid>

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
                          </Paper>
                        ))}
                      <Grid className={classes.btn}>
                        <Button
                          variant="contained"
                          onClick={() => push({ translator: '', legalnotes: '', upload: '' })}
                          className={classes.add}
                          startIcon={<AddIcon />}
                        >
                          Add Row
                        </Button>
                      </Grid>
                    </div>
                  )}
                />
              </Form>
            );
          }}
        />
      </Paper>
    </div>
  );
}

export default LegalProcess;
