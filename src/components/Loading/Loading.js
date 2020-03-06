import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';

export default function Loading() {

    return (
        <Grid container justify="center" thickness={5} style={style.progress}>
            <CircularProgress size={150} color='inherit' />
        </Grid>
    );
}


const style = {
    progress: {
        marginTop: "10%",
        color: '#36a1b6'
    }
}