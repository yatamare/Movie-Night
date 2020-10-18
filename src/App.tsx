// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, NavLink } from 'react-router-dom';

// Pages
import Movies from './Pages/Movies';
import Users from './Pages/Users';

// Materials
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
            <Router
                basename=""
                forceRefresh={true}>
                <AppBar position="static" className={classes.navBar}>
                    <Toolbar>
                        <div className={classes.title}>
                            <Typography variant="h5" className={classes.title}>
                                <Link to={""} className={classes.link}> Movie Night </Link>
                            </Typography>
                        </div>
                        <div className={classes.linksRow}>
                            <Typography variant="h6" className={classes.title}>
                                <NavLink to="/users" activeStyle={{color:"#9c7393"}} className={classes.link}>Users</NavLink>
                                <NavLink to="/movies" activeStyle={{color:"#9c7393"}} className={classes.link}>Movies</NavLink>
                                <NavLink to="/login" activeStyle={{color:"red"}} className={classes.link}>Login</NavLink>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route path="/movies" component={Movies} />
                    <Route path="/users" component={Users} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;