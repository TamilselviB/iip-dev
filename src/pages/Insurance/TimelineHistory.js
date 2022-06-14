import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HomeIcon from '@material-ui/icons/Home';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import moment from 'moment';
import * as insuranceService from '../../Services/insuranceService';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimelineHistory({ data ,handleNavigation,disableAction}) {
  const classes = useStyles();
  const [endorsementDescription, setEndorsementDescription] = React.useState('');
  // const dateFormater = () => {
  //   console.log( new Date('2021-01-19T14:47:45.000Z').toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
  //   console.log(moment('2021-01-19T14:47:45.000Z').tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"))
  // //  return  moment(data.created).tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
  // };
  useEffect(() => {
    if(data){
    if(data?.endorsementDescription=='Do you want to change the Insured Details like Address,Contact details, Registration No and Insured Name')
    setEndorsementDescription(data.endorsementDescription.substring(15))
    else if(data && data?.endorsementDescription.substring(0,7)=='Want to')
    setEndorsementDescription(data.endorsementDescription.substring(8))
    else{
      setEndorsementDescription(data.endorsementDescription)
    }
    }
}, [data]);
    const confirm = (flag) => {
      console.log('---------inside confirm--------',flag);
      let obj={
        "status" : flag?"companyAcceptEndorsement":"companyRejectEndorsement"
      }
      insuranceService.endorsementUpdatePremium(obj, data.id).then(res => {
        console.log(res);
        // setTimeout(() => {
        //   setLoading(false);
        //   toast.warn(
        //     <div>
        //       <FontAwesomeIcon icon={faExclamationCircle} className="toastIcon" />
        //       <h6
        //         style={{
        //           fontSize: '19px',
        //           marginLeft: '23px',
        //           marginTop: '1px',
        //           width: '224px',
        //         }}
        //       >
        //         Saved
        //       </h6>
        //     </div>,
        //     {
        //       position: toast.POSITION.BOTTOM_CENTER,
        //       closeButton: true,
        //       hideProgressBar: true,
        //     },
        //   );
        //   sendFormData();
        // }, 2000);
      });
    };
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          {new Date(data.created).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <HomeIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Request to {endorsementDescription}
            </Typography>
            <Button variant="contained" color="secondary" onClick={()=>confirm(true)} disabled={disableAction}>
              Accept
            </Button>&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={()=>confirm(false)} disabled={disableAction} >
              Reject
            </Button>&nbsp;&nbsp;
            <Button variant="contained" color="secondary" onClick={handleNavigation}>
              View Changes
            </Button>
            <Button style={{ marginLeft: '100px' }}><u>View Remarks</u></Button>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            12:00 pm
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: "rgb(240, 71, 99)" }}>
            <HomeWorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Policy
            </Typography>created
            <Typography>Policy raised on {data?.policy?.created.substring(0,10)} with Policy No. {data?.policy?.policyNumber}</Typography>
            <Button style={{ marginLeft: '100px' }}  href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(data?.policy)
            )}`}
            download={`${data?.policy?.policyNumber}.json`}><u>View Policy</u></Button>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            10:00 am
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <HomeIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Quotation No. {data?.policy?.quotationNumber}
            </Typography>
            <Typography>The Quotation No is generated with the reference of Request Id is {data?.policy?.requestId}</Typography>
            <Button><u>View Quotation</u></Button>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
