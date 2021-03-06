import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DescriptionIcon from '@material-ui/icons/Description';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import IndemnityTable from './IndemnityTable';
import RecoveryTable from './RecoveryTable';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsColor: {
    backgroundColor: theme.palette.background.default,
    color: 'white',
  },
}));

function ClaimTabs({ claim, updatePage }) {
  const userType = useSelector(state => state.authReducer.userType);
  const classes = useStyles();
  // const [closeResults] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
          className={classes.tabsColor}
        >
          <Tab label="Loss Reserve" icon={<DescriptionIcon />} {...a11yProps(0)} />

          <Tab label="Loss Recovery" icon={<InsertDriveFileIcon />} {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <IndemnityTable claimid={claim.id} updatePage={updatePage} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RecoveryTable claimid={claim.id} updatePage={updatePage} />
      </TabPanel>
    </div>
  );
}

export default ClaimTabs;
