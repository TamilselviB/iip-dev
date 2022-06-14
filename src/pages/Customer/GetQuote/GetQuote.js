import React, { useState, useEffect } from 'react';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as getQuoteService from '../../../Services/getQuoteService';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: 10,
  },
  card: {
    maxWidth: 350,
  },
  media: {
    height: 160,
  },
});

function GetQuote() {
  const [quotes, setQuotes] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchData() {
      await getQuoteService.lineOfBusiness().then(result => {
        setQuotes(result);
      });
    }
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.root} spacing={3}>
        {quotes &&
          quotes.length > 0 &&
          quotes.map(result => (
            <Grid item xs={4} key={result?.name}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`data:image/jpeg;base64,${result.logo}`}
                    title="quote"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center">
                      {result?.name}
                    </Typography>
                    <Typography align="center">
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => dispatch(push('/Customer/GetQuote/UserForm'))}
                      >
                        {t('getquote.button')}
                      </Button>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}

export default GetQuote;
