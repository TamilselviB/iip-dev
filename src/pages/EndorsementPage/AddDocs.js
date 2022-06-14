import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import { Formik, Form, Field } from 'formik';
import './Info.css';
import Upload from './Upload';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AddDocs({ data, submit }) {
  const [value, setValue] = useState({
    "document": [],
  })
  return (
    <Formik
    initialValues={value}
    enableReinitialize
    onSubmit={values => {
      try {
        console.log('-----------------------bs', values)
        // submit({ 'riskDetails': [...data.riskDetails, reqObj] })
      } catch (error) {
        console.log("🚀 ~ file: NewLocation.js ~ line 134 ~ NewLocation ~ error", error)
      }

    }}
  >
    {({ values, errors, touched }) => (
      <Form autoComplete="off" >
    <div>
      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item xs={9}>

          <Card className="infocard">
            <CardContent>
              <div style={{ marginLeft: "150px" }}>
              <Upload values={values}/>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Button variant="contained" type='submit' className="btnSave">
       Submit&nbsp;
       <ArrowForwardIcon />
      </Button>
    </div>
    </Form>
      )}
    </Formik>

  );
}
