// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// Pages
import Movies from './Pages/Movies';
import Users from './Pages/Users';

// Materials
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#73939C',
    },
    navBar: {
        backgroundColor: '#313233'
    },
    link: {
        textDecoration: 'none',
        color: "white",
        paddingRight: '30px',
    },
    linksRow: {
        paddingRight: '0px',
    },
    title: {
      flexGrow: 1,
    },
  }));

////////////////////////////////////////////
// App  
function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Router>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <div className={classes.title}>
                            <Typography variant="h5" className={classes.title}>
                                <Link to={"/home"} className={classes.link}> Movie Night </Link>
                            </Typography>
                        </div>
                        <div className={classes.linksRow}>
                            <Typography variant="h6" className={classes.title}>
                                <Link to={"/users"} className={classes.link}>Users</Link>
                                <Link to={"/movies"} className={classes.link}>Movies</Link>
                                <Link to={"/login"} className={classes.link}>Login</Link>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="" component={Users} />
                    <Route path="/home" component={Movies} />
                    <Route path="/movies" component={Movies} />
                    <Route path="/users" component={Users} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;