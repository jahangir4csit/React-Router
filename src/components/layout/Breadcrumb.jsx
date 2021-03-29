import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        color: 'white',
        '& ol': {
            justifyContent: 'flex-end',
        }
    }
  }));

function handleClick(event) {
    event.preventDefault();
  }
  
  export default function Breadcrumb() {
    const classes = useStyles();
    return (
      <div class="breadcrumb-area">
          <Container maxWidth="lg">
            <Grid container direction="row">
                <Grid item xs={12} className="breadcrumb-inner">
                    <Breadcrumbs className={classes.root} aria-label="breadcrumb">
                        <Link color="inherit" href="/" onClick={handleClick}>
                            Home
                        </Link>
                        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
                            Shop
                        </Link>
                        <Link
                        color="textPrimary"
                        href="/components/breadcrumbs/"
                        onClick={handleClick}
                        aria-current="page"
                        >
                            Details
                        </Link>
                    </Breadcrumbs>
                </Grid>
            </Grid>
          </Container>
      </div>
    );
  }