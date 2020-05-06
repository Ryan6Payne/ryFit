import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import './WorkoutCalc.scss';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Slider } from '@material-ui/core';
import { Input } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

export default function WorkoutCalc(props) {

  const classes = useStyles();
  const [currentWeight, setCurrentWeight] = useState('');
  const { history } = props;

  //Final values
  const [deadlift, setDeadlift] = useState(0);
  const [benchPress, setBenchPress] = useState(0);
  const [shoulderPress, setshoulderPress] = useState(0);
  const [squat, setSquat] = useState(0);

  //Working values
  const [valueDL, setValueDL] = useState(0);
  const [valueBP, setValueBP] = useState(0);
  const [valueSP, setValueSP] = useState(0);
  const [valueS, setValueS] = useState(0);

  useEffect(() => {
    FB.getUserField("currentWeight").then(setCurrentWeight)
  }, [])

  const handleInputChangeDL = event => {
    setValueDL(event.target.value === '' ? '' : Number(event.target.value));
    setDeadlift(event.target.value);
  };

  const handleInputChangeBP = event => {
    setValueBP(event.target.value === '' ? '' : Number(event.target.value));
    setBenchPress(event.target.value);
  };

  const handleInputChangeSP = event => {
    setValueSP(event.target.value === '' ? '' : Number(event.target.value));
    setshoulderPress(event.target.value);
  };

  const handleInputChangeS = event => {
    setValueS(event.target.value === '' ? '' : Number(event.target.value));
    setSquat(event.target.value);
  };

  /* disallow user to go below 0 or above 100 */
  const handleBlurDL = () => {
    if (valueDL < 0) {
      setValueDL(0);
    } else if (valueDL > 210) {
      setValueDL(210);
    }
  };

  const handleBlurBP = () => {
    if (valueBP < 0) {
      setValueBP(0);
    } else if (valueBP > 210) {
      setValueBP(210);
    }
  };

  const handleBlurSP = () => {
    if (valueSP < 0) {
      setValueSP(0);
    } else if (valueSP > 210) {
      setValueSP(210);
    }
  };

  const handleBlurS = () => {
    if (valueS < 0) {
      setValueS(0);
    } else if (valueS > 210) {
      setValueS(210);
    }
  };

  function addWorkoutToDB() {
    try {
      if (deadlift === 0) {
        alert("Ensure you have entered a deadlift value")
      } else if (benchPress === 0) {
        alert("Ensure you have entered a bench press value")
      } else if (shoulderPress === 0) {
        alert("Ensure you have entered a shoulder press value")
      } else if (squat === 0) {
        alert("Ensure you have entered a squat value")
      } else {
        FB.addWorkout(parseInt(deadlift), parseInt(benchPress), parseInt(shoulderPress), parseInt(squat), parseInt(currentWeight))
        history.push('./Workout');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="full-container-workoutCalc">
      <div className="left-container-workoutCalc">
        <div className="workout-summary">
          <h1>Workout Calculator</h1>
          <p>This is the workout calculator. Please enter your ability at 10 reps each exercise. The application will
          use this information to generate a workout for you.
          </p>
        </div>
        <div className="left-generate-workoutCalc">
          <div className="weight-workoutCalc">
            <div className="tooltip">
              <span class="tooltiptext">If this weight is incorrect, change it on your profile!</span>
              <TextField variant="outlined" disabled="true" className="weighttf-workoutCalc" value={currentWeight + "Kg"} label="Body Weight" />
            </div>
          </div>

          <div className="generate-workout-button">
            <Button variant="outlined" color="primary" onClick={addWorkoutToDB} type="submit">
              Generate Workout
          </Button>
          </div>
        </div>
      </div>
      <div className="right-container-workoutCalc">
        <Paper className="paper-workoutCalc" elevation={20}>
          <div className="lift-title">
            <h1>Deadlift</h1>
          </div>
          <div className="lift-content">
            <div className="lift-input">
              <Input
                className={classes.input}
                value={valueDL}
                onChange={handleInputChangeDL}
                onBlur={handleBlurDL}
                disableUnderline={false}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 210,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
              <p>Kg</p>
            </div>
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueDL === 'number' ? valueDL : 0}
              className={classes.slider}
              disabled
              max={210}
              marks={marks}
              track={false}
            />
          </div>
        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>
          <div className="lift-title">
            <h1>Bench Press</h1>
          </div>
          <div className="lift-content">
            <div className="lift-input">
              <Input
                className={classes.input}
                value={valueBP}
                onChange={handleInputChangeBP}
                onBlur={handleBlurBP}
                disableUnderline={false}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 210,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
              <p>Kg</p>
            </div>
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueBP === 'number' ? valueBP : 0}
              className={classes.slider}
              disabled
              max={210}
              marks={marks}
              track={false}
            />
          </div>
        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>
          <div className="lift-title">
            <h1>Shoulder Press</h1>
          </div>
          <div className="lift-content">
            <div className="lift-input">
              <Input
                className={classes.input}
                value={valueSP}
                onChange={handleInputChangeSP}
                onBlur={handleBlurSP}
                disableUnderline={false}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 210,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
              <p>Kg</p>
            </div>
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueSP === 'number' ? valueSP : 0}
              className={classes.slider}
              disabled
              max={210}
              marks={marks}
              track={false}
            />
          </div>
        </Paper>
        <Paper className="paper-workoutCalc" elevation={20}>
          <div className="lift-title">
            <h1>Squat</h1>
          </div>
          <div className="lift-content">
            <div className="lift-input">
              <Input
                className={classes.input}
                value={valueS}
                onChange={handleInputChangeS}
                onBlur={handleBlurS}
                disableUnderline={false}
                inputProps={{
                  step: 10,
                  min: 0,
                  max: 210,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
              <p>Kg</p>
            </div>
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueS === 'number' ? valueS : 0}
              className={classes.slider}
              disabled
              max={210}
              marks={marks}
              track={false}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}

const useStyles = makeStyles({
  input: {
    width: '80px',
    fontSize: 19,
    textAlign: 'center'
  },
  slider: {
    width: '80%',
    color: '#36a1b6',
  }
});

const marks = [
  {
    value: 0,
    label: 'Beginner'
  },
  {
    value: 70,
    label: 'Intermediate'
  },
  {
    value: 140,
    label: 'Advanced'
  },
  {
    value: 210,
    label: 'Expert'
  }
];