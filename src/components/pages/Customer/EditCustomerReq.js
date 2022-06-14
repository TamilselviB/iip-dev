import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InsuredInfo from './InsuredInfo';
import RiskInfo from './RiskInfo';
import PropertyInfo from './PropertyInfo';
import Covers from './Covers';
import SafetyMeasures from './SafetyMeasures';
import CustDocs from './CustDocs';
import Summary from '../../Summary';
import UplDocs from './UplDocs';
import Terms from '../../Terms/Terms';
import * as getQuoteService from '../../../Services/getQuoteService';
import TimelineHistory from '../../../pages/Insurance/TimelineHistory';
import InfoIcon from '@material-ui/icons/Info';
import PreviousInfoModal from '../../util/PreviousInfoModal';
import EndtDetails from '../../../pages/EndorsementPage/EndtDetails';

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
  icon:PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function EditCustomerReq(props) {
  const userType = 'Insurance';
  const id = useSelector(state => state.authReducer.id) || sessionStorage.getItem('userid');
  const [submitLength, setSubmitLength] = useState([]);
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [showPreviousInfo, setShowPreviousInfo] = React.useState(false);
  const [disableAction, setDisableAction] = React.useState(true);

  const [   tableData, setTableData] = React.useState('');
  useEffect(() => {
    const Id = props.computedMatch.params.id;
    if (props.location.state == 'quote') {
      // setValue(0)
      getQuoteService.getQuoteSubscription(Id).then(result => {
        console.log('result', result);
        setTableData(result);
      });
    }
    else {
      // setValue(0)
      getQuoteService.getEndorsementRequest(Id).then(result => {
        console.log('result', result);
        setTableData(result);
      });
    }
    const object = {
      userId: id,
      status: 'submitted',
    };
    getQuoteService
      .getCompanyQuotes(object)
      .then(data => {
        console.log('getCompanyQuotes', data);
        setSubmitLength(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, {});
  const handleChange = (event, newValue) => {
    console.log('------handleChange--------',newValue)
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    console.log('------handleChangeIndex--------',index)

    setValue(index);
  };

  const handlePreviousInfo= value => {
    console.log('------handlePreviousInfo--------',value)
    setShowPreviousInfo(true)
    // setValue(index);
  };
  const handleNavigation= () => {
    setDisableAction(false)
    // setValue(1)
    if(tableData.endorsementDescription=='Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name')
      setValue(1);
    else if(tableData.endorsementDescription=='Makes changes to the Risk Address and Details')
      setValue(2);
    else if(tableData.endorsementDescription=='change the cover datails' )
      setValue(4);
    else if( tableData.endorsementDescription=='Delete a Location'||  tableData.endorsementDescription=='Add a New Location')
      setValue(2);
    else if(tableData.endorsementDescription=='Want to change T & C')
      setValue(7);

  };
  const handleNext= () => {
    if(tableData.endorsementDescription=='Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name'){
    if(value==1)
    setValue(8);
    else if(value==8)
    setValue(0);    
    }
    else if(tableData.endorsementDescription=='Makes changes to the Risk Address and Details')
    {
      if(value==1)
      setValue(2);
      else if(value==2)
      setValue(3);
      else if(value==3)
      setValue(8);
      else if(value==8)
      setValue(0);
    }
    else if(tableData.endorsementDescription=='change the cover datails' ){
      if(value==1)
      setValue(4);
      else if(value==4)
      setValue(8);
      else if(value==8)
      setValue(9);
    }
    else if(  tableData.endorsementDescription=='Delete a Location'||  tableData.endorsementDescription=='Add a New Location'){
      if(value==1)
      setValue(2);
      else if(value==2)
      setValue(3);
      else if(value==3)
      setValue(4);
      else if(value==4)
      setValue(8);
      else if(value==8)
      setValue(9);
    }
    else if(tableData.endorsementDescription=='Want to change T & C')
    if(value==1)
    setValue(7);
    else if(value==7)
    setValue(8);
    else if(value==8)
      setValue(0);
  };
  const setValues = () => {
    const Id = props.computedMatch.params.id;
    console.log('props', props);
    if (props.location.state == 'quote') {
      getQuoteService.getQuoteSubscription(Id).then(result => {
        setTableData(result);
      });
    }
    else {
      getQuoteService.getEndorsementRequest(Id).then(result => {
        setTableData(result);
      });
    }
  };

  return (
    <div>{props.location.state == 'endorsement'?<EndtDetails requestId={tableData?.endorsementRequestId} policyNo={tableData?.policy?.policyNumber} insuredName={tableData?.insuredName} />:''}
    <div className={classes.root}>
      <div class="page-content">
        <div class="container-fluid">
          {/* <!-- Page-Title --> */}
         
        </div>
        {/* <!--end row--> */}

        <div class="card">
          <div class="card-body">
            <div class="col-lg-12">
            {showPreviousInfo?<PreviousInfoModal open={showPreviousInfo} setShowPreviousInfo={setShowPreviousInfo} data={tableData.policy} productName={tableData?.product?.productName}/>:null}
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="black"
                  variant="fullWidth"
                  aria-label="icon tabs example"
                >
                 
                 { props.location.state == 'endorsement'?
                  <Tab label="History" {...a11yProps(0)} />:null}
                  <Tab label="Insured Info" icon={props.location.state == 'endorsement'&&tableData.endorsementDescription=='Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name'?<InfoIcon className="endorseTab" onClick={handlePreviousInfo} />:''}{...a11yProps(1)} />
                  <Tab label="Risk Info" {...a11yProps(2)} disabled={props.location.state == 'endorsement' && (tableData.endorsementDescription=='Want to change T & C'||tableData.endorsementDescription=='change the cover datails')}/>
                  <Tab label="Property Info" {...a11yProps(3)} disabled={props.location.state == 'endorsement' && (tableData.endorsementDescription=='Want to change T & C' || tableData.endorsementDescription=='change the cover datails')}/>
                  <Tab label="Cover Info"  {...a11yProps(4)} disabled={props.location.state == 'endorsement' && !(tableData.endorsementDescription=='change the cover datails'  ||  tableData.endorsementDescription=='Delete a Location'||  tableData.endorsementDescription=='Add a New Location') }/>
                  <Tab label="Safety Measures" {...a11yProps(5)} disabled={props.location.state == 'endorsement' && tableData.endorsementDescription!='Add a New Location'}/>
                  <Tab label="Cust.Docs" {...a11yProps(6)} disabled={props.location.state == 'endorsement' && tableData.endorsementDescription!=''}/>
                  <Tab label="Terms&Cond." {...a11yProps(7)} disabled={props.location.state == 'endorsement' && tableData.endorsementDescription!='Want to change T & C'}/>
                  <Tab label="Upload Docs" {...a11yProps(8)} />
                  <Tab label="Summary" {...a11yProps(9)} disabled={props.location.state == 'endorsement' && !(tableData.endorsementDescription=='change the cover datails' ||  tableData.endorsementDescription=='Delete a Location'||  tableData.endorsementDescription=='Add a New Location') }/>

                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              > 
                <TabPanel value={value} index={0} dir={theme.direction}>
                 { props.location.state == 'endorsement'?
                  <TimelineHistory data={tableData}  handleNavigation={handleNavigation}  disableAction={disableAction}/>:<InsuredInfo data={tableData} type={props.location.state }/>}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                 <InsuredInfo data={tableData} type={props.location.state } handleNext={handleNext}/>: <RiskInfo data={tableData}  type={props.location.state }/>}
                  
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <RiskInfo data={tableData}  type={props.location.state } handleNext={handleNext} />:<PropertyInfo data={tableData} type={props.location.state }/>}
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <PropertyInfo data={tableData} type={props.location.state } handleNext={handleNext}/>:<Covers setValues={setValues} props={tableData} type={props.location.state } />}
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <Covers  setValues={setValues} props={tableData} type={props.location.state} description={tableData.endorsementDescription} handleNext={handleNext}  />:<SafetyMeasures data={tableData} product={tableData.product} type={props.location.state } />}
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <SafetyMeasures data={tableData} product={tableData.product} type={props.location.state } />: <CustDocs data={tableData} />}
                </TabPanel>
                <TabPanel value={value} index={6} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <CustDocs data={tableData} handleNext={handleNext}/> :<Terms data={tableData}  />}
                </TabPanel>
                <TabPanel value={value} index={7} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <Terms data={tableData} handleNext={handleNext}/> :<UplDocs data={tableData} />}
                </TabPanel>
                <TabPanel value={value} index={8} dir={theme.direction}>
                { props.location.state == 'endorsement'?
                  <UplDocs data={tableData} handleNext={handleNext} /> : <Summary
                  summaryData={tableData}
                  setValues={setValues}
                  mode={userType}
                  props={props}
                  type={props.location.state }
                  
                />}
                </TabPanel>
                <TabPanel value={value} index={9} dir={theme.direction}>
                  <Summary
                    summaryData={tableData}
                    setValues={setValues}
                    mode={userType}
                    props={props}
                    type={props.location.state }
                  />
                </TabPanel>

              </SwipeableViews>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- container --> */}
    </div>
  </div>
  );
}
