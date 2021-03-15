import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.04em 0',
  },
}));

const Pricing = (props) => {
  const classes = useStyle();
    return(
      <div>
        <div className={classes.head}></div>
        <Container maxWidth="md">
          <Grid container direction="row">
            <Grid item xs="12">
              <h1>Pricing</h1>
            </Grid>
          </Grid>
        </Container>
        
      </div>
    )
}
export default Pricing;