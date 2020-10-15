// Base
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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
        paddingRight: '30px',
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
            <Router>
                <Link to={"/movies-liked"} className={classes.link}>Users</Link>
                <Link to={"/movies-all"} className={classes.link}>All</Link>
                <Switch>
                    <Route path="/movies-liked" component={LikedMovies} />
                    <Route path="/movies-all" component={AllMovies} />
                </Switch>
            </Router>
        </div>
    );
}

export default Movies;