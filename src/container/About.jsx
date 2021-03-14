import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import aboutImg from '../assets/img/about.jpg';

const useStyle = makeStyles((theme)=>({
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.04em 0',
  },
  aboutWrap: {
    padding: '5.3em 0',
  },
  aboutImg: {

  }
}));

const About = (props) => {
  const classes = useStyle();
    return(
      <div>
        <div className={classes.head}></div>
        <Container maxWidth="md" className={classes.aboutWrap}>
          <Grid container direction="row" spacing={6}>
            <Grid item xs="12" sm="5" >
              <Grid container >
                <Grid item>
                  <img className={classes.aboutImg} alt="complex" src={aboutImg} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs="12" sm="7" >
              <h1>My Story</h1>
            </Grid>
          </Grid>
        </Container>
        
      </div>
    )
}
export default About;