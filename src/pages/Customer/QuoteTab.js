import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import InsuredInfo from '../../components/pages/Customer/InsuredInfo';
import RiskInfo from '../../components/pages/Customer/RiskInfo';
import PropertyInfo from '../../components/pages/Customer/PropertyInfo';
import { fetchEndorsementReceivedQuote, fetchReceivedQuote } from '../../actions/quoteReceived';
import SafetyMeasures from '../../components/pages/Customer/SafetyMeasures';
import * as getQuoteService from '../../Services/getQuoteService';
import Covers from '../../components/pages/Customer/Covers';
import CustDocs from '../../components/pages/Customer/CustDocs';
import Summary from '../../components/Summary';
import Terms from '../../components/Terms/Terms';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function QuoteTab(props) {
  const dispatch = useDispatch();
  const userType = 'Customer';
  const id = props.computedMatch.params.id;
  useEffect(() => {
    if (props.location.state == 'quote') {
    dispatch(fetchReceivedQuote(id));
    }
    else{
      dispatch(fetchEndorsementReceivedQuote(id));
    }
  }, []);
  const theme = useTheme();

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const tableData = useSelector(state => state.receivedQuoteReducer.receivedQuote);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };
  const setValues = () => {
    let tableData;
    if (props.location.state == 'quote') {
      getQuoteService.getQuoteSubscription(id).then(result => {
        tableData = result;
      });
    }
    else {
      getQuoteService.getEndorsementRequest(id).then(result => {
        tableData = result;
      });
    
  };
  }

  return (
    <div className={classes.root}>
      <Grid xs={12} className="page-content">
        {/* <!--end row--> */}
        <div className="card">
          <div className="card-body">
            <div className="col-lg-12">
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="black"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Insured Info" {...a11yProps(0)} />
                  <Tab label="Risk Info" {...a11yProps(1)} />
                  <Tab label="Property Info" {...a11yProps(2)} />
                  <Tab label="Cover Info" {...a11yProps(3)} />
                  <Tab label="SafetyMeasures" {...a11yProps(4)} />
                  <Tab label="Cust.Docs" {...a11yProps(5)} />
                  <Tab label="Terms" {...a11yProps(6)} />
                  <Tab label="Summary" {...a11yProps(7)}/>
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <InsuredInfo data={tableData} type={tableData.quoteType}/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <RiskInfo data={tableData} type={tableData.quoteType}/>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <PropertyInfo data={tableData} type={tableData.quoteType}/>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <Covers setValues={setValues} props={tableData} type={tableData.quoteType }/>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                  <SafetyMeasures data={tableData} product={tableData.product} type={tableData.quoteType }/>
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                  <CustDocs data={tableData} />
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                  <Terms data={tableData}/>
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                  <Summary
                    summaryData={tableData}
                    setValues={setValues}
                    mode={userType}
                    props={props}
                    type={props.location.state}
                  />
                </TabPanel>
              </SwipeableViews>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default QuoteTab;
