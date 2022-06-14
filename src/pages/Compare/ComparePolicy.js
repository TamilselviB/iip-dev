import React from 'react';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import BuildDynamicColumns from './BuildDynamicColumns';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fixedColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 'auto',
    margin: 3,
  },
  coveragePaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 'auto',
    margin: 3,
  },
  control: {
    padding: theme.spacing(2),
  },
  fixed: {
    position: 'sticky',
  },
  mainColumn: {
    backgroundColor: '#f04763',
    color: 'white',
    fontSize: '17px',
    fontWeight: 500,
  },
  locColumn: {
    backgroundColor: 'rgb(39,39,62)',
    color: 'white',
    fontSize: '17px',
    fontWeight: 500,
  },
}));

const buildStaticColumns = data => {
  const { riskDetails, termsDoc } = data;
  const location = [];
  const terms = [];
  riskDetails.forEach((_, index) => {
    location.push(`Location #${index + 1}`);
    location.push('Sum Insured');
    location.push('Coverage');
  });

  if (termsDoc && termsDoc.length > 0) {
    terms.push('Terms and Conditions');
    termsDoc.forEach(t => {
      terms.push(t.type);
    });
  }

  return ['Company Name', 'Net Premium', ...location, 'Policy Level Coverage', ...terms, 'Remove'];
};

const increasedHeightColumns = [
  'Coverage',
  'Policy Level Coverage',
  'Warranty',
  'Subjectivity',
  'Inclusion',
  'Exclusion',
];

const highlightedColumns = ['Policy Level Coverage', 'Terms and Conditions'];

function ComparePolicy() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const comparePolicies = useSelector(state => state.comparePolicyReducer.compare);

  return (
    <Container maxWidth="lg">
      <Grid container style={{ padding: 5 }}>
        <Grid item xs={12}>
          <Typography variant="h5" style={{ padding: 15 }}>
            Compare offers
          </Typography>
        </Grid>
      </Grid>
      {comparePolicies.length === 0 && (
        <Typography variant="h4" component="h2" align="center">
          Please add some policy to compare.....
        </Typography>
      )}
      {comparePolicies && comparePolicies.length > 0 && (
        <Grid className={classes.root} container>
          <Grid item xs={3} className={classes.fixed}>
            {buildStaticColumns(comparePolicies[0]).map(value => (
              <Grid key={value} item>
                <Paper
                  className={`${
                    increasedHeightColumns.includes(value) ? classes.coveragePaper : classes.paper
                  } ${['Company Name'].includes(value) && classes.mainColumn}
                ${value.indexOf('ation') > -1 && classes.locColumn}
                ${highlightedColumns.includes(value) && classes.locColumn}
                  `}
                >
                  <Typography align="center" component="h1">
                    {value}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={9}
            style={{
              overflowX: 'scroll',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
            }}
          >
            <>
              {comparePolicies.map((c, index) => (
                <BuildDynamicColumns key={index} data={c} />
              ))}
            </>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default ComparePolicy;
