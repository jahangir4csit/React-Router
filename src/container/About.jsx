import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import aboutImg from '../assets/img/about.jpg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles((theme)=>({
  head: {
    backgroundColor: theme.palette.common.blue,
    padding: '2.04em 0',
  },
  aboutWrap: {
    padding: '5.3em 0',
  },
  aboutImg: {
    height: '600px',
    position: 'relative',
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    '&::before': {
      position: 'absolute',
      bottom: '130px',
      left: '-30px',
      width: '100%',
      height: '100px',
      content: `''`,
      background: '#89c4fb',
      zIndex: '-1',
    },
    '&::after': {
      position: 'absolute',
      bottom: '30px',
      left: '-30px',
      width: '100%',
      height: '100px',
      content: `''`,
      background: '#57abfa',
      zIndex: '-1',
    }
  },
  aboutContent: {
    display: 'Block',
  },
  aboutTabs: {
    opacity: '1',
    '& div div': {
      paddingBottom: '10px',
    },
    '& button': {
      color: '#777',
      backgroundColor: '#fff',
      opacity: 1,
      border: 'none',
      textTransform: 'uppercase',
      fontSize: '13px',
      fontWeight: 700,
      marginRight: '10px',
      marginBottom: '-1px',
      borderTopLeftRadius: '.25rem',
      borderTopRightRadius: '.25rem',
    },
    '& button.Mui-selected': {
      backgroundColor: '#0779e4',
      color: '#fff',
      overflow: 'visible',
      '&::after': {
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      webkitTransform: 'translateX(-50%)',
      msTransform: 'translateX(-50%)',
      transform: 'translateX(-50%)',
      content: `''`,
      width: '0',
      height: '0',
      borderStyle: 'solid',
      borderWidth: '10px 10px 0',
      borderColor: '#0779e4 transparent transparent transparent',
      }
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function About() {

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const classes = useStyle();
    return(
      <div>
        <div className={classes.head}></div>
        <Container maxWidth="md" className={classes.aboutWrap}>
          <Grid container direction="row" spacing={6}>
            <Grid item xs="12" sm="6" >
              <Grid container >
                <Grid item className={classes.aboutImg} style={{ backgroundImage: `url(${aboutImg})` }}></Grid>
              </Grid>
            </Grid>
            <Grid className={classes.aboutContent} item xs="12" sm="6" >
              <Grid container>
                <Grid item direction="column">
                  <Tabs className={classes.aboutTabs} value={value} onChange={handleChange} aria-label="tabs" indicatorColor="">
                    <Tab label="ABOUT ME" {...a11yProps(0)} />
                    <Tab label="SKILLS" {...a11yProps(1)} />
                    <Tab label="EXPERIENCE" {...a11yProps(2)} />
                  </Tabs>
                </Grid>
                <Grid item direction="column">
                  <TabPanel value={value} index={0}>
                    <Typography variant="h2">
                      My Story
                    </Typography>
                    <Typography variant="p">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the 
                      Semantics, a large language ocean.
                    </Typography>
                    <Typography variant="h3">
                      I Do Web Design & Developement since I was 18 Years Old
                    </Typography>
                    <Typography variant="p">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                      there live the blind texts.
                    </Typography>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                  <Typography variant="h2">
                      Skills
                    </Typography>
                    <Typography variant="p">
                      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                      there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.
                    </Typography>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Typography variant="h4">
                      Art & Creative Director
                    </Typography>
                  </TabPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        
      </div>
    )
}