// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// Pages
import Movies from './Pages/Movies';

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
      height: "100%",
      backgroundColor: '#6f7072',
    },
    navBar: {
        backgroundColor: '#313233'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    link: {
        textDecoration: 'none',
        color: "white",
    },
    linksRow: {
        paddingRight: '50px',
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
        <React.Fragment>
        <div>
            <div className={classes.root}>
                <Router>
                    <AppBar position="static" className={classes.navBar}>
                        <Toolbar>
                            <div className={classes.title}>
                                <Typography variant="h5" className={classes.title}>
                                    Movie Night
                                </Typography>
                            </div>
                            <div className={classes.linksRow}>
                                <Link to={"/movies"} className={classes.link}>Movies</Link>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route path='/movies' component={Movies} />
                        <Route render={() => <Redirect to={{pathname: "/"}} />} />
                    </Switch>
                </Router>
            </div>
        </div>
        </React.Fragment>
    );
}

export default App;