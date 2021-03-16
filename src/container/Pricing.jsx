import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
  root: {
    width: '100%',
    display: 'Block',
    padding: '4em 0',
  },
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.2em 0',
  },
  card: {},
  cardHeader: {},
  cardContent: {
    '& ul': {
      padding: 0,
      '& li': {
        listStyle: 'none',
      },
    },
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  cardAction: {},
}));

export default function Pricing() {
  const classes = useStyle();
    return(
      <div className="page">
        <div className={classes.head}></div>
          <Container maxWidth="md" component="main" className={classes.root}>
            <Grid container direction="row">
              <Grid item xs={12} align="center" className="page-heading mb-5">
                <Typography variant="h4">
                  Pricing
                </Typography>
                <Typography variant="h2" className="mb-4">
                  Pricing & Packages
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="flex-end">
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader className={classes.cardHeader}>
                    BASIC PLAN
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${'49K'}
                      </Typography>
                    </div>
                    <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                        Far far away, behind the word
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        mountains, far from the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        countries Vokalia and
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        Consonantia, there live the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        blind texts.
                      </Typography>
                    </ul>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button fullWidth variant="" color="primary">
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader className={classes.cardHeader}>
                    BASIC PLAN
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${'49K'}
                      </Typography>
                    </div>
                    <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                        Far far away, behind the word
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        mountains, far from the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        countries Vokalia and
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        Consonantia, there live the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        blind texts.
                      </Typography>
                    </ul>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button fullWidth variant="" color="primary">
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardHeader className={classes.cardHeader}>
                    BASIC PLAN
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.cardPricing}>
                      <Typography component="h2" variant="h3" color="textPrimary">
                        ${'49K'}
                      </Typography>
                    </div>
                    <ul>
                      <Typography component="li" variant="subtitle1" align="center">
                        Far far away, behind the word
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        mountains, far from the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        countries Vokalia and
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        Consonantia, there live the
                      </Typography>
                      <Typography component="li" variant="subtitle1" align="center">
                        blind texts.
                      </Typography>
                    </ul>
                  </CardContent>
                  <CardActions className={classes.cardAction}>
                    <Button fullWidth variant="" color="primary">
                      Get Started
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
      </div>
    )
}