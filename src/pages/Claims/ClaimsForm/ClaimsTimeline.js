import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { DDMMYY } from '../../../utils/utils';

const timelineDetails = {
  requestedClaim: {
    title: 'Requested Claim',
    description: 'Customer has Requested the claim',
    icon: <PersonIcon />,
  },
  acknowledgeClaim: {
    title: 'Acknowledged Claim',
    description: 'Insurance Company has acknowledged the claim',
    icon: <AccountBalanceIcon />,
  },
  rejectClaim: {
    title: 'Claim Rejected',
    description: 'Insurance Company has rejected the claim',
    icon: <AccountBalanceIcon />,
  },
  pendingWithAdjuster: {
    title: 'Forwared to Adjuster',
    description: 'Insurance Company has forwarded the claim to adjuster',
    icon: <ContactPhoneIcon />,
  },
  verifiedByAdjuster: {
    title: 'Adjuster Verified',
    description: 'Adjuster has verified the claim and uploaded docs',
    icon: <ContactPhoneIcon />,
  },
  claimApproved: {
    title: 'Approved',
    description: 'Claim Approved By Insurance Company',
    icon: <AccountBalanceIcon />,
  },
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const SoleTimeLineItem = ({ time, name, description, icon, classes }) => (
  <TimelineItem>
    <TimelineOppositeContent>
      <Typography variant="body2" color="textSecondary">
        {time}
      </Typography>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot color="primary" variant="outlined">
        {icon}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" component="h1">
          {name}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
);

export default function ClaimsTimeline({ timeline }) {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      {timeline &&
        timeline.length > 0 &&
        timeline.map(c => (
          <SoleTimeLineItem
            key={c.id}
            name={timelineDetails[c.status.name].title}
            description={timelineDetails[c.status.name].description}
            time={DDMMYY(c.created)}
            icon={timelineDetails[c.status.name].icon}
            classes={classes}
          />
        ))}
    </Timeline>
  );
}
