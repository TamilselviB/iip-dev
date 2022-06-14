import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HouseIcon from "@material-ui/icons/House";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import PhoneIcon from "@material-ui/icons/Phone";
import NoteIcon from "@material-ui/icons/Note";

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

function Insure(data) {
    console.log(data);
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <PersonIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Insured Name</Typography>
              <Typography className={classes.description}>{data?.data?.insuredName}</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} className={classes.grid}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <HouseIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography className={classes.title}>Prodect</Typography>
              <Typography className={classes.description}>
              {data?.data?.product?.productName}
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
              <Typography className={classes.title}>Contact Person</Typography>
              <Typography className={classes.description}>{data?.data?.contactPerson}</Typography>
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
              {data?.data?.email}
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
              <Typography className={classes.description}>{data?.data?.licenceId}</Typography>
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
              {data?.data?.address?.street}, {data?.data?.address?.zip},
                {data?.data?.address?.city}, {data?.data?.address?.state}
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
              <Typography className={classes.title}>Contact</Typography>
              <Typography className={classes.description}>
              {data?.data?.mobileNumber}
              </Typography>
              <Typography className={classes.description}>
              {data?.data?.alternateContact}
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
              {data?.data?.notes}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insure;
