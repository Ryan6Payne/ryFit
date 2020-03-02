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

  //Final values
  const [deadlift, setDeadlift] = useState('');
  const [benchPress, setBenchPress] = useState('');
  const [shoulderPress, setshoulderPress] = useState('');
  const [squat, setSquat] = useState('');

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
    } else if (valueDL > 200) {
      setValueDL(200);
    }
  };

  const handleBlurBP = () => {
    if (valueBP < 0) {
      setValueBP(0);
    } else if (valueBP > 200) {
      setValueBP(200);
    }
  };

  const handleBlurSP = () => {
    if (valueSP < 0) {
      setValueSP(0);
    } else if (valueSP > 200) {
      setValueSP(200);
    }
  };

  const handleBlurS = () => {
    if (valueS < 0) {
      setValueS(0);
    } else if (valueS > 200) {
      setValueS(200);
    }
  };

  function hi() {
    console.log(deadlift)
    console.log(benchPress)
    console.log(shoulderPress)
    console.log(squat)

  }

  return (
    <div className="full-container-workoutCalc">
      <div className="left-container-workoutCalc">
        <div className="left-content-workoutCalc">
          <div className="weight-workoutCalc">
            <div className="tooltip">
              <span class="tooltiptext">If this weight is incorrect, change it on your profile!</span>
              <TextField variant="outlined" disabled="true" className="weighttf-workoutCalc" value={currentWeight} label="Weight" />
            </div>
          </div>
          <div className="generate-workout-button">
            <Button variant="outlined" color="primary" type="submit">
              Generate Workout
          </Button>
            <p></p>
            <Button variant="contained" onClick={hi} type="submit">
              CONSOLE LOG TEST
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
            <Input
              className={classes.input}
              value={valueDL}
              onChange={handleInputChangeDL}
              onBlur={handleBlurDL}
              disableUnderline={false}
              inputProps={{
                step: 10,
                min: 0,
                max: 200,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueDL === 'number' ? valueDL : 0}
              className={classes.slider}
              disabled
              max={200}
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
            <Input
              className={classes.input}
              value={valueBP}
              onChange={handleInputChangeBP}
              onBlur={handleBlurBP}
              disableUnderline={false}
              inputProps={{
                step: 10,
                min: 0,
                max: 200,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueBP === 'number' ? valueBP : 0}
              className={classes.slider}
              // disabled
              max={200}
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
            <Input
              className={classes.input}
              value={valueSP}
              onChange={handleInputChangeSP}
              onBlur={handleBlurSP}
              disableUnderline={false}
              inputProps={{
                step: 10,
                min: 0,
                max: 200,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueSP === 'number' ? valueSP : 0}
              className={classes.slider}
              disabled
              max={200}
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
            <Input
              className={classes.input}
              value={valueS}
              onChange={handleInputChangeS}
              onBlur={handleBlurS}
              disableUnderline={false}
              inputProps={{
                step: 10,
                min: 0,
                max: 200,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
            <p>for</p>
            <p>10 Reps</p>
            <Slider
              value={typeof valueS === 'number' ? valueS : 0}
              className={classes.slider}
              disabled
              max={200}
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
    width: '20%',
    fontSize: 19,
  },
  slider: {
    width: '80%',
    color: '#36a1b6',
  }
});

const marks = [
  {
    value: 0,
    label: 'beginner'
  },
  {
    value: 70,
    label: 'intermediate'
  },
  {
    value: 140,
    label: 'you\'re pro'
  },
  {
    value: 190,
    label: 'the rock'
  }
];

// Have the generate workout button write to the database both the given weight for each workout at the given
// 10 reps, but also work out their 1 rep max ability for each. Also, store a time stamp against each generated
// workout.
