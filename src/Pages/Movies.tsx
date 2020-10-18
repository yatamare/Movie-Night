// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom';

// Pages
import LikedMovies from './LikedMovies';
import AllMovies from './AllMovies';

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    link: {
        textDecoration: 'none',
        color: "white",
        marginTop: 5,
        paddingRight: 35,
        paddingLeft: 35,
        fontSize: 20,
    },
    linkList: {
        paddingTop: 2,
    },
    paperLink: {
        marginTop: 8,
        height: 25,
        width: 250,
        backgroundColor: '#313233',
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    },
    paperContainer:{
        marginTop: 20,
        height: "100%",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: '#313233',
    },
    center: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    },
    parent: {
        position: "relative",
    },
  }),
);

////////////////////////////////////////////
// App
function Movies(){
    const classes = useStyles();

    //
    return(
        <div className={classes.root}>
            <Router
                basename="/movies">
                <div className={classes.parent}>
                    <Paper elevation={3} className={classes.paperLink}>
                        <div className={classes.linkList}>
                            <NavLink to="/liked" activeStyle={{color:"#9c7393"}} className={classes.link}>Liked</NavLink>
                            |
                            <NavLink to="/all" activeStyle={{color:"#9c7393"}} className={classes.link}>All</NavLink>
                        </div>
                    </Paper>
                </div>
                <div>
                    <Paper elevation={0} className={classes.paperContainer}>
                        <Switch>
                            <Route path={"/liked"} component={LikedMovies} />
                            <Route path={"/all"} component={AllMovies} />
                        </Switch>
                    </Paper>
                </div>
            </Router>
        </div>
    );
}

export default Movies;