import React from "react";
import './Dashboard.scss';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className="full-container-dashboard">
      <div className="left-container-dashboard">
        <Paper elevation={20} className={classes.paperL}>

        </Paper>
      </div>

      <div className="right-container-dashboard">
        <Paper elevation={0} className={classes.paperR}>
          <Paper elevation={20} className={classes.paperRT}>

          </Paper>
          <Paper elevation={20} className={classes.paperRB}>

          </Paper>
        </Paper>
      </div>
    </div >

  )
}

const useStyles = makeStyles({
  paperL: {
    width: '95%',
    height: '95%',
    border: '1px solid black'
  },

  paperR: {
    width: '95%',
    height: '95%',
  },

  paperRT: {
    width: '100%',
    height: '49%',
    border: '1px solid black'
  },
  paperRB: {
    width: '100%',
    height: '47.75%',
    marginTop: '2.5%',
    border: '1px solid black'
  }

});