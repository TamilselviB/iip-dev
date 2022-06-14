import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '720px',
    marginTop: '-35px',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    // chip: {
    //   marginTop: theme.spacing(33),
    //   marginLeft: theme.spacing(-850px)
    // }
  },
}));

function EndtDetails({insuredName,policyNo,requestId}) {
  const classes = useStyles();

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip label={`Request Id: ${requestId}`} style={{ backgroundColor:"rgb(240, 71, 99)", color:"white"}}/>
      <Chip label={`Policy Number:${policyNo}`} style={{ backgroundColor: "rgb(240, 71, 99)", color: "white" }} />
      <Chip label={`Insured Name: ${insuredName}`} style={{ backgroundColor: "rgb(240, 71, 99)", color: "white" }} />

    </div>
  );
}

export default EndtDetails
