import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import WorkCompensation from './WorkCompensation';



const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    margin: 30,
    marginLeft: theme.spacing(10),
  },
  alert: {
    padding: 30,
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    color: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.background.default,
    fontFamily: 'sans-serif',
  },
}));

export default function FormGeneral() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={9}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                {' '}
        Work Compensation
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
             <WorkCompensation />
            </AccordionDetails>
          </Accordion>

          {/* Risk */}
          {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
               Employee Details
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <EmployeDetails/>
            </AccordionDetails>
          </Accordion> */}

          {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
               Upload Docs
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
      <UploadDocuments/>
            </AccordionDetails>
          </Accordion> */}

          {/* Property */}
          {/* <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Contractor Info
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ContractorInfo />
            </AccordionDetails>
          </Accordion> */}

          {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Machinery Info
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
            {/* <MachineryInfo /> */}
          {/* </AccordionDetails>
          </Accordion> */}

          {/* Cover */}
          {/* <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Coverage Details
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CoverageDetails />
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Safety Measures
                  </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Safety />
            </AccordionDetails>
          </Accordion> */}
          {/* CostDocs */}
          {/* <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} elevation={8}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                Upload Documents
          </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <UploadDocs />
            </AccordionDetails>
          </Accordion> */}
          {/* Summary */}
        </Grid>
      </Grid>
      <Grid item xs={2}>
      </Grid>
      <Button type='submit' variant="contained" className="btnSave1">
        Save & Continue&nbsp;
       {/* <ArrowForwardIcon /> */}
      </Button>
      {/* <Button variant="contained" className="btnProperty">
        Add Machinery&nbsp;
      </Button> */}
    </div>
  );
}
