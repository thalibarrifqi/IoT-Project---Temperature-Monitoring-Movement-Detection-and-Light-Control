import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgHome from '../assets/home.svg';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#000',
      height: '750px'
    },
    imgHome: {
      textAlign: 'center',
      width: '100%',
      height: '100%',
      marginTop: '100px'
    },
    header: {
        textAlign: 'center',
        marginTop: '170px',
        color: '#FFF',
        fontFamily:'Quicksand',
        fontSize:'4rem',
      },
      text: {
        textAlign: 'center',
        color: '#FFF',
        fontFamily:'Quicksand',
        fontSize:'1.5rem',
        marginBottom:'100px'
      },
  }));

export default function Home() {

    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Box width="100%" marginTop="50px" className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography>
                    <img className={classes.imgHome} src={imgHome} alt="" />
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.header}>
                        Welcome!
                    </Typography>
                    <Typography className={classes.text}>
                        Have a nice day<br/>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  );
}
