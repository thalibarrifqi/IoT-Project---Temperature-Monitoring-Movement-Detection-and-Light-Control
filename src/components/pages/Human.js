import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgHuman from '../assets/human.svg';
import { realtime } from '../../Firebase'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#000',
      height: 'auto'
    },
    imgHome: {
      textAlign: 'center',
      width: '80%',
      height: '80%',
      marginTop: '100px',
      marginLeft: '20px',
      marginBottom: '180px'
    },
    header: {
        textAlign: 'center',
        marginTop: '170px',
        color: '#FFF',
        fontFamily:'Quicksand',
        fontSize:'3rem'
      },
  }));

export default function Human() {

  const classes = useStyles();

  const [Human, setHuman]=useState([])

  useEffect(() => {
    realtime.ref('smarthome/pir').on('value', snapshot => {
      setHuman(snapshot.val().human)
    })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
        <Box width="100%" marginTop="50px" className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.header}>
                        {Human}<br/>
                        in your house
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>
                        <img className={classes.imgHome} src={imgHuman} alt="" />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  );
}
