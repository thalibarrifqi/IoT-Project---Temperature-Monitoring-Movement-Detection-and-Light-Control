import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  appbar:{
      boxShadow: 'none',
      backgroundColor: '#FF0093',
      position: 'fixed'
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    color:'#FFF'
  },
  title0: {
    flexGrow: 1,
    fontFamily: 'Quicksand',
    fontSize: '1.5rem'
  },
  title1: {
    flexGrow: 1,
    fontFamily: 'Quicksand',
    color: '#FFF',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title0}>
            MySmartHome
          </Typography>
          <Link to='/' style={{textDecoration: 'none'}}>
            <Button className={classes.title1}>
                <Typography  >
                    Home
                </Typography>  
            </Button>
          </Link>
          <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <Link to='/temperature' style={{color:'#000', textDecoration: 'none'}}>
                <MenuItem onClick={handleClose}>Temperature</MenuItem>
                </Link>
                <Link to='/human' style={{textDecoration: 'none', color:'#000',}}>
                <MenuItem onClick={handleClose}>Human</MenuItem>
                </Link>
                <Link to='/light' style={{textDecoration: 'none', color:'#000',}}>
                <MenuItem onClick={handleClose}>Light</MenuItem>
                </Link>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
