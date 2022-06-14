import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';
import { deleteCompare } from '../../actions/comparePolicy';
import { numberFormatUSFormat, captilalizeWord } from '../../utils/utils';

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 225,
    margin: 3,
  },
  coverpaper: {
    flexDirection: 'columns',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 225,
    margin: 3,
  },
  toolTip: {
    cursor: 'pointer',
  },
}));

const allCovers = data => {
  return data.filter(d => d.isPolicyLevel === false && d.isDefault);
};

const policyLevelCovers = data => {
  const covers = [];
  for (let i = 0; i < data.length; i++) {
    const filter = data[0].covers.filter(d => d.isPolicyLevel);
    filter.forEach(a => covers.push(a.coverName));
  }
  return [...new Set(covers)];
};

const constructTermsAndConditions = (termsDoc, classes) => {
  const terms = [];
  terms.push(
    <Grid item>
      <Paper className={classes.paper}>{''}</Paper>
    </Grid>,
  );
  const termsArray =
    termsDoc &&
    termsDoc.map((c, idx) => (
      <Grid item>
        <Paper className={classes.coverpaper}>
          {c.value.map((n, index) => (
            <Typography key={n} component="p" color="inherit">
              {index + 1}. {n}
            </Typography>
          ))}
        </Paper>
      </Grid>
    ));
  return [...terms, ...termsArray];
};

function BuildDynamicColumns({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { riskDetails, id, grossPremium, termsDoc } = data;
  const [first] = riskDetails;
  const currency = first.covers[0]?.currencyName;

  return (
    <Grid xs={3} item key={id}>
      <Grid item>
        <Paper
          className={classes.paper}
          style={{ backgroundColor: '#f04763', color: 'white', fontSize: '17px', fontWeight: 500 }}
        >
          {' '}
          {data?.company.companyName}
        </Paper>
      </Grid>
      <Grid item>
        {' '}
        <Paper className={classes.paper} style={{ fontSize: '15px', fontWeight: 500 }}>
          {data.premiumAmount && (
            <Tooltip
              className={classes.toolTip}
              title={
                <>
                  <Typography color="inherit">
                    1.Gross Premium = <b>{currency}</b>{' '}
                    {numberFormatUSFormat(data.grossPremium ? data.grossPremium : 0)}
                  </Typography>
                  <Typography color="inherit">
                    2.Discount = <b>{currency}</b>{' '}
                    {numberFormatUSFormat(data.premiumAmount ? data.premiumAmount?.discount : 0)}
                  </Typography>
                  <Typography color="inherit">
                    3.Fee = <b>{currency}</b>{' '}
                    {numberFormatUSFormat(data.premiumAmount ? data.premiumAmount?.fees : 0)}
                  </Typography>
                  <Typography color="inherit">
                    4.Tax = <b>{currency}</b>{' '}
                    {numberFormatUSFormat(data.premiumAmount ? data.premiumAmount?.gstVatTax : 0)}
                  </Typography>
                  <Typography color="inherit">
                    5. Net Premium = <b>{currency}</b>{' '}
                    {numberFormatUSFormat(data.premiumAmount ? data.premiumAmount?.netPremium : 0)}
                  </Typography>
                </>
              }
              arrow
            >
              <Typography>
                <b>{currency}</b> {numberFormatUSFormat(data?.premiumAmount?.netPremium)}
              </Typography>
            </Tooltip>
          )}
        </Paper>
      </Grid>
      {riskDetails &&
        riskDetails.map(d => (
          <>
            <Grid item>
              <Paper className={classes.paper}>
                <Typography variant="body1">
                  {d.propertyName} {d.subsidiaryCompany}
                </Typography>
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.paper} style={{ fontSize: '15px', fontWeight: 500 }}>
                <b>{currency}</b>{' '}
                {numberFormatUSFormat(
                  d.covers.reduce((a, b) => Number(a) + Number(b.sumAssured ? b.sumAssured : 0), 0),
                )}
              </Paper>
            </Grid>
            <Grid item>
              <Paper className={classes.coverpaper}>
                {allCovers(d.covers).map(
                  (n, index) =>
                    n.isDefault && (
                      <Tooltip
                        className={classes.toolTip}
                        title={
                          <Typography key={n} color="inherit">
                            Sum Assured: {n.sumAssured}
                          </Typography>
                        }
                        arrow
                      >
                        <Typography key={n} component="p" color="inherit">
                          {index + 1}. {n.coverName}
                        </Typography>
                      </Tooltip>
                    ),
                )}
              </Paper>
            </Grid>
          </>
        ))}
      <Grid item>
        <Paper className={classes.coverpaper}>
          {policyLevelCovers(riskDetails).map((n, index) => (
            <Typography key={n} component="p" color="inherit">
              {index + 1}. {n}
            </Typography>
          ))}
        </Paper>
      </Grid>
      {termsDoc && termsDoc.length > 0 && constructTermsAndConditions(termsDoc, classes)}

      <Grid item>
        <Paper className={classes.paper}>
          <IconButton aria-label="delete" style={{ width: 'auto' }}>
            <DeleteIcon fontSize="medium" onClick={() => dispatch(deleteCompare(id))} />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
}

BuildDynamicColumns.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default BuildDynamicColumns;
