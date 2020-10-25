import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgTemp from '../assets/temp.svg';
import { realtime } from '../../Firebase'
import {WiDegrees} from 'react-icons/wi'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#000',
      height: 'auto'
    },
    imgHome: {
      alignItems: 'center',
      width: '90%',
      height: '90%',
      marginTop: '100px',
      marginLeft: '20px',
      marginBottom: '240px'
    },
    header: {
        textAlign: 'center',
        marginTop: '170px',
        color: '#FFF',
        fontFamily:'Quicksand',
        fontSize:'3rem'
      },
  }));

  

export default function Temperature() {
  const classes = useStyles();

  const [temperature, setTemperature]=useState([])
  const [humidity, setHumidity]=useState([])

  useEffect(() => {
    realtime.ref('smarthome/dht').on('value', snapshot => {
      setTemperature(snapshot.val().temperature)
      setHumidity(snapshot.val().humidity)
    })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
        <Box width="100%" marginTop="50px" className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.header}>
                        Temperature is<br/>
                        {temperature}
                        <br/>
                        and Humidity is<br/>
                        {humidity}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Typography>
                    <img className={classes.imgHome} src={imgTemp} alt="" />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  );
}
