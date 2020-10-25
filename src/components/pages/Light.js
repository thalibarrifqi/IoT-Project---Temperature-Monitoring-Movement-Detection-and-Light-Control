import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import imgLight from '../assets/light.svg';
import { realtime } from '../../Firebase'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#000',
      height: 'auto'
    },
    imgHome: {
      textAlign: 'center',
      width: '50%',
      height: '50%',
      marginTop: '80px',
      marginLeft: '50px',
      marginBottom: '140px'
    },
    header: {
        textAlign: 'center',
        marginTop: '170px',
        color: '#FFF',
        fontFamily:'Quicksand',
        fontSize:'3rem'
      },
  }));

export default function Light() {

  const classes = useStyles();
  const [Light, setLight]=useState([])

  const clickToDo = () => {
    const clickRef = realtime.ref('smarthome').child('light')
    clickRef.set({
      light: "ON"
    })
  }

  useEffect(() => {
    realtime.ref('smarthome/light').on('value', snapshot => {
      setLight(snapshot.val().light)
    })
  }, [])

  return (
    <React.Fragment>
      <CssBaseline />
        <Box width="100%" marginTop="50px" className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.header}>
                        The light is<br/>
                        {Light}<br/>
                        <Button variant="contained" color="secondary" onClick={clickToDo}>
                         Manually Turn On
                        </Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    <img className={classes.imgHome} src={imgLight} alt="" />
                   </Typography>
                </Grid>
            </Grid>
        </Box>
    </React.Fragment>
  );
}
