// Base
import React from 'react';

// Apollo
import { useQuery } from '@apollo/react-hooks';

// Database
import { MOVIE_ALL_QUERY } from '../GraphQL/Queries/movie.queries';

// CSS & Material UI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

////////////////////////////////////////////
// Styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 325,
      width: 250,
      backgroundColor: '#313233',
    },
    title: {
        marginTop: 20,
        paddingTop: "2px",
        color: "white",
        fontSize: 22,
    },
    image: {
        color: "white",
        textAlign: "center",
    },
    description: {
        color: "white",
        bottom: "35px",
        marginLeft: 5,
        marginRight: 5,
    },
    center: {
        marginLeft: 5,
        marginRight: 5,
        textAlign: "center",
    },
    remove: {
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
    },
    parent: {
        position: "relative",
    }
  }),
);

////////////////////////////////////////////
// App
function AllMovies(){
    const classes = useStyles();

    let userId = 0;
    // Grab the required data
    var {data, loading, error} = useQuery(
        MOVIE_ALL_QUERY,
    )
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error!</p>;

    //
    return(
        <div>
            <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {data.Movie.map((movie: any, index: any) => (
                    <Grid key={index} item>
                        <Paper elevation={3} className={classes.paper}>
                            <div className={classes.parent}>
                                <div className={classes.title}>
                                    <p className={classes.center}>{movie.movie_name}</p>
                                </div>
                                <div className={classes.image}> 
                                    <p> (image goes here) </p>
                                </div>
                                <div className={classes.description}>
                                    <p className={classes.center}>{movie.movie_description}</p>
                                </div>
                                <div className={classes.remove}>
                                    <Button className={classes.remove} variant="outlined" color="secondary">
                                        Remove
                                    </Button>
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                ))}
                </Grid>
            </Grid>
            </Grid>
        </div>
    );
}

export default AllMovies;