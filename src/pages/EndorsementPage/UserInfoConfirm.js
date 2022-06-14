import React, {useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HouseIcon from "@material-ui/icons/House";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PhoneIcon from "@material-ui/icons/Phone";
import NoteIcon from "@material-ui/icons/Note";
import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import './Info.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(22),
    textAlign: "left",
    padding: 12,
  },
  icon: {
    color: "blue",
    fontSize: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: "sans-serif",
  },
  description: {
    fontSize: 13,
    color: theme.palette.text.secondary,
  },
}));

function UserInfoConfirm({userInfoConfirmPageValue, setUserInfo}) {
  const sendFormData = useCallback(() => {
    setUserInfo(userInfoConfirmPageValue);
  }, [setUserInfo]);
  const classes = useStyles();
  return (
    <div>
      <Card className="infocard">
        <CardContent>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>

                   <HouseIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
                  <Typography className={classes.title}>Product</Typography>
                  <Typography className={classes.description}>
                   Fire
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
                  <PersonIcon className={classes.icon} />
            </Grid>
            <Grid item xs>

                  <Typography className={classes.title}>Insured Name</Typography>
                  <Typography className={classes.description}>Tamil</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <PersonIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Contact Person</Typography>
              <Typography className={classes.description}>Tamil</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <EmailIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>E-mail Id</Typography>
              <Typography className={classes.description}>
                abc@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <RecentActorsIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>License Id</Typography>
              <Typography className={classes.description}>ABC123</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <RecentActorsIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Address</Typography>
              <Typography className={classes.description}>
               44,Rajaji Street,Erode
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <PhoneIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Contact Number</Typography>
              <Typography className={classes.description}>
              956212222
              </Typography>
              <Typography className={classes.description}>
              785666666
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <NoteIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Notes</Typography>
              <Typography className={classes.description}>
              ancdefgh
              </Typography>
            </Grid>
          </Grid>
        </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Button onClick={() => { sendFormData();}} variant="contained" className="btnSaveConfirm">
         Confirm & Submit&nbsp;
       <ArrowForwardIcon />
      </Button>
    </div>
  );
}
export default UserInfoConfirm;
