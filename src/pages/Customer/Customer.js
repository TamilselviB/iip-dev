import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useTranslation } from 'react-i18next';
import InsuranceCard from '../../components/InsuranceCard/InsuranceCard';
import CustomCarousel from '../../components/Carousel/Carousel';
import axios from '../../axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },

  activeIndicatorProps: {
    fontSize: 24,
    color: 'red',
  },
  indicatorProps: {
    fontSize: 24,
  },
  indicatorContainerProps: {
    fontSize: 24,
    color: 'white',
  },
  card: {
    maxWidth: 250,
  },
  media: {
    height: 160,
  },
  btnstyles: {
    width: 'auto',
    height: '45px',
    marginBottom: '25px',
    borderRadius: '29px',
    backgroundColor: '#27273ebd',
    color: 'white',
  },
}));

const ViewMoreCard = ({ imgPath, name }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={imgPath} title="quote" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {name}
          </Typography>
          <Typography align="center">
            <Button variant="outlined" color="secondary" fullWidth>
              View More
            </Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

function Customer(props) {
  const { t } = useTranslation();
  const classes = useStyles();
  const dashboard = useSelector(state => state.userQuoteReducer.customer);

  return (
    <div>
      <div className="page-content" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid sm={12}>
              <div className="page-title-box">
                <div style={{ float: 'right' }}>
                  <Link
                    to={{
                      pathname: '/Customer/GetQuote',
                    }}
                  >
                    <Button className={classes.btnstyles}>{t('customer.get_quote')}</Button>
                  </Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/Customer/FormGeneral">
                    <Button className={classes.btnstyles}>{t('customer.claim_status')}</Button>
                  </Link>
                </div>
              </div>
            </Grid>
          </Grid>

          <h4 className="page-title">&nbsp;&nbsp;{t('customer.active_post')}</h4>
          {Object.keys(dashboard).length > 0 && dashboard && (
            <Grid container>
              <CustomCarousel>
                <InsuranceCard
                  label={t('customer.draft')}
                  value={dashboard ? dashboard?.draft : 0}
                />
                <InsuranceCard
                  label={t('customer.submitted')}
                  value={dashboard ? dashboard?.submitted : 0}
                />
                <InsuranceCard
                  label={t('customer.received_quotes')}
                  value={dashboard ? dashboard?.inProgress : 0}
                />
                <InsuranceCard
                  label={t('customer.my_policies')}
                  value={dashboard ? dashboard?.active : 0}
                />
              </CustomCarousel>
            </Grid>
          )}
          {/* <!--end row--> */}

          <br />
          <br />

          <h4 className="page-title" style={{ color: 'darkblue' }}>
            {' '}
            &nbsp;&nbsp;New Offers
          </h4>

          <div className="card" style={{ marginLeft: '15px', marginRight: '6px' }}>
            <div className="row no-gutters">
              <div
                className="col-lg-4"
                style={{
                  background: 'linear-gradient(to right ,#464747,#70b4ec)',
                  height: '400px',
                }}
              >
                <div className="card-body">
                  <br />
                  <br />
                  <h1 style={{ textAlign: 'center', color: 'whitesmoke' }}>SUMMER SPECIAL</h1>
                  <p
                    style={{
                      fontSize: '60px',
                      textAlign: 'center',
                      color: 'whitesmoke',
                    }}
                  >
                    OFFER
                  </p>
                  <h2 style={{ color: 'tomato', textAlign: 'center' }}>GET CLAIM UPTO</h2>
                  <p
                    style={{
                      fontSize: '50px',
                      textAlign: 'center',
                      color: 'tomato',
                    }}
                  >
                    20%
                  </p>
                </div>
              </div>
              <div className="col-lg-8" style={{ height: '400px' }}>
                <img
                  src="https://www.directasia.com/blog/wp-content/uploads/2018/12/How-far-will-your-car-insurance-take-you--740x491.jpg"
                  className="card-img"
                  alt="..."
                  height="400px"
                />
              </div>
            </div>
          </div>

          <Grid container>
            <CustomCarousel>
              <ViewMoreCard name="Home Insurance" imgPath="assets/images/home1.jpg" />
              <ViewMoreCard name="Motor Insurance" imgPath="assets/images/motor1.jpg" />
              <ViewMoreCard name="Marine Insurance" imgPath="assets/images/ship3.jpg" />
              <ViewMoreCard name="Motor Fleet" imgPath="assets/images/motor3.jpg" />
              <ViewMoreCard name="Fire Insurance" imgPath="assets/images/home2.jpg" />
              <ViewMoreCard name="Engineering" imgPath="assets/images/enginee.jpg" />
            </CustomCarousel>
          </Grid>
        </Container>
      </div>
      <footer className="footer text-center text-sm-center" style={{ marginBottom: '-120px' }}>
        &copy; 2020 Insurance{' '}
      </footer>
      {/* <!--end footer-->    */}
    </div>
  );
}

export default Customer;
