import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import './WorkoutCalc.scss';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

export default function WorkoutCalc(props) {

  const [currentWeight, setCurrentWeight] = useState('');

  useEffect(() => {
    FB.getUserField("currentWeight").then(setCurrentWeight)
  }, [])

  return (
    <div className="full-container-workoutCalc">
      <div className="left-container-workoutCalc">
        <div className="left-content-workoutCalc">
          <div className="weight-workoutCalc">
            <div className="tooltip">
              <span class="tooltiptext">If this weight is incorrect, change it on your profile!</span>
              <TextField variant="outlined" disabled="true" className="weighttf-workoutCalc" value={currentWeight} label="Weight"></TextField>
            </div>
          </div>
          <div className="generate-workout-button">
            <Button variant="outlined" color="primary" type="submit">
              Generate Workout
          </Button>
          </div>
        </div>
      </div>
      <div className="right-container-workoutCalc">
        <Paper className="paper-workoutCalc" elevation={20}>

        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>

        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>

        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>

        </Paper>
      </div>
    </div>
  );
}
