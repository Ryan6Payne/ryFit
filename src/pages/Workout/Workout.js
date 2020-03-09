import React, { useState, useEffect } from "react";
import Loading from '../../components/Loading/Loading';
import FB from '../../config/config';
import { MenuItem, Select } from '@material-ui/core';
import './Workout.scss';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '95%',
    margin: '0 auto',
  },
  head: {
    backgroundColor: '#BEE2FF',
  }
});

export default function Workout() {

  const classes = useStyles();

  const [isLoading, setisLoading] = useState(true)

  const delay = 1200;

  const [benchPress, setBenchPress] = useState('')
  const [deadlift, setDeadlift] = useState('')
  const [shoulderPress, setShoulderPress] = useState('')
  const [squat, setSquat] = useState('')
  const [week, setWeek] = useState(1)

  function getData() {
    FB.getWorkoutField("deadlift").then(setDeadlift)
    FB.getWorkoutField("benchPress").then(setBenchPress)
    FB.getWorkoutField("shoulderPress").then(setShoulderPress)
    FB.getWorkoutField("squat").then(setSquat)
  }

  //add getLatestWorkout() here, same as profile.

  setTimeout(function () {
    setisLoading(false)
  }, delay)

  useEffect(() => {
    getData();
  }, [])

  function createData(workout, set1, set2, set3, set4) {
    return { workout, set1, set2, set3, set4 }
  }

  const rowsWeek1 = [
    createData('Deadlift', deadlift + 'x10', (deadlift * 1.20) + 'x5', (deadlift * 1.25) + 'x3', (deadlift * 1.30) + 'x1'),
    createData('Bench Press', benchPress + 'x10', (benchPress * 1.20) + 'x5', (benchPress * 1.25) + 'x3', (benchPress * 1.30 + 'x1')),
    createData('Shoulder Press', shoulderPress + 'x10', (shoulderPress * 1.20) + 'x5', (shoulderPress * 1.25) + 'x3', (shoulderPress * 1.30 + 'x1')),
    createData('Squat', squat + 'x10', (squat * 1.20) + 'x5', (squat * 1.25) + 'x3', (squat * 1.30 + 'x1'))
  ]

  const rowsWeek2 = [
    createData('Deadlift', (deadlift + 1) + 'x10', (deadlift * 1.20 + 1) + 'x5', (deadlift * 1.25 + 1) + 'x3', (deadlift * 1.30 + 1) + 'x1'),
    createData('Bench Press', (benchPress + 1) + 'x10', (benchPress * 1.20 + 1) + 'x5', (benchPress * 1.25 + 1) + 'x3', (benchPress * 1.30 + 1) + 'x1'),
    createData('Shoulder Press', (shoulderPress + 1) + 'x10', (shoulderPress * 1.20 + 1) + 'x5', (shoulderPress * 1.25 + 1) + 'x3', (shoulderPress * 1.30 + 1) + 'x1'),
    createData('Squat', (squat + 1) + 'x10', (squat * 1.20 + 1) + 'x5', (squat * 1.25 + 1) + 'x3', (squat * 1.30 + 1) + 'x1')
  ]

  const rowsWeek3 = [
    createData('Deadlift', (deadlift + 2) + 'x10', (deadlift * 1.20 + 2) + 'x5', (deadlift * 1.25 + 2) + 'x3', (deadlift * 1.30 + 2) + 'x1'),
    createData('Bench Press', (benchPress + 2) + 'x10', (benchPress * 1.20 + 2) + 'x5', (benchPress * 1.25 + 2) + 'x3', (benchPress * 1.30 + 2) + 'x1'),
    createData('Shoulder Press', (shoulderPress + 2) + 'x10', (shoulderPress * 1.20 + 2) + 'x5', (shoulderPress * 1.25 + 2) + 'x3', (shoulderPress * 1.30 + 2) + 'x1'),
    createData('Squat', (squat + 2) + 'x10', (squat * 1.20 + 2) + 'x5', (squat * 1.25 + 2) + 'x3', (squat * 1.30 + 2) + 'x1')
  ]

  const rowsWeek4 = [
    createData('Deadlift', (deadlift + 3) + 'x10', (deadlift * 1.20 + 3) + 'x5', (deadlift * 1.25 + 3) + 'x3', (deadlift * 1.30 + 3) + 'x1'),
    createData('Bench Press', (benchPress + 3) + 'x10', (benchPress * 1.20 + 3) + 'x5', (benchPress * 1.25 + 3) + 'x3', (benchPress * 1.30 + 3) + 'x1'),
    createData('Shoulder Press', (shoulderPress + 3) + 'x10', (shoulderPress * 1.20 + 3) + 'x5', (shoulderPress * 1.25 + 3) + 'x3', (shoulderPress * 1.30 + 3) + 'x1'),
    createData('Squat', (squat + 3) + 'x10', (squat * 1.20 + 3) + 'x5', (squat * 1.25 + 3) + 'x3', (squat * 1.30 + 3) + 'x1')
  ]


  if (isLoading) {
    return <Loading />
  }

  if (week === 1) {
    return (
      <div className="full-container-workout">
        <div className="left-container-workout">
          <div className="left-content-workout">
            <div className="header-workout">
              <h1>Workout</h1>
            </div>
            <div className="inner-content-workout">
              <p>Deadlift: {deadlift}</p>
              <p>Bench Press: {benchPress}</p>
              <p>Shoulder Press: {shoulderPress}</p>
              <p>Squat: {squat}</p>
              <div>
                <Select
                  labelId="gender-select"
                  id="gender-select"
                  value={week}
                  onChange={e => setWeek(e.target.value)}
                  className="select"
                  variant="outlined"
                >
                  <MenuItem value={1}>Week 1 and 2</MenuItem>
                  <MenuItem value={2}>Week 3 and 4</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container-workout">


          <TableContainer component={Paper}>
            <h1>Week 1</h1>
            <Table className={classes.table} size="medium">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell align="right">Set 1 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 2 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 3 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 4 (Kg x Reps)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsWeek1.map(row => (
                  <TableRow key={row.workout}>
                    <TableCell component="th" scope="row">
                      {row.workout}
                    </TableCell>
                    <TableCell align="right">{row.set1}</TableCell>
                    <TableCell align="right">{row.set2}</TableCell>
                    <TableCell align="right">{row.set3}</TableCell>
                    <TableCell align="right">{row.set4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper}>
            <h1>Week 2</h1>
            <Table className={classes.table} size="large">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell align="right">Set 1 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 2 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 3 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 4 (Kg x Reps)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsWeek2.map(row => (
                  <TableRow key={row.workout}>
                    <TableCell component="th" scope="row">
                      {row.workout}
                    </TableCell>
                    <TableCell align="right">{row.set1}</TableCell>
                    <TableCell align="right">{row.set2}</TableCell>
                    <TableCell align="right">{row.set3}</TableCell>
                    <TableCell align="right">{row.set4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    )
  }

  if (week === 2) {
    return (
      <div className="full-container-workout">
        <div className="left-container-workout">
          <div className="left-content-workout">
            <div className="header-workout">
              <h1>Workout</h1>
            </div>
            <div className="inner-content-workout">
              <p>Deadlift: {deadlift}</p>
              <p>Bench Press: {benchPress}</p>
              <p>Shoulder Press: {shoulderPress}</p>
              <p>Squat: {squat}</p>
              <div>
                <Select
                  labelId="gender-select"
                  id="gender-select"
                  value={week}
                  onChange={e => setWeek(e.target.value)}
                  className="select"
                  variant="outlined"
                >
                  <MenuItem value={1}>Week 1 and 2</MenuItem>
                  <MenuItem value={2}>Week 3 and 4</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <div className="right-container-workout">


          <TableContainer component={Paper}>
            <h1>Week 3</h1>
            <Table className={classes.table} size="large">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell align="right">Set 1 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 2 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 3 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 4 (Kg x Reps)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsWeek3.map(row => (
                  <TableRow key={row.workout}>
                    <TableCell component="th" scope="row">
                      {row.workout}
                    </TableCell>
                    <TableCell align="right">{row.set1}</TableCell>
                    <TableCell align="right">{row.set2}</TableCell>
                    <TableCell align="right">{row.set3}</TableCell>
                    <TableCell align="right">{row.set4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper}>
            <h1>Week 4</h1>
            <Table className={classes.table} size="large">
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell>Exercise</TableCell>
                  <TableCell align="right">Set 1 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 2 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 3 (Kg x Reps)</TableCell>
                  <TableCell align="right">Set 4 (Kg x Reps)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsWeek4.map(row => (
                  <TableRow key={row.workout}>
                    <TableCell component="th" scope="row">
                      {row.workout}
                    </TableCell>
                    <TableCell align="right">{row.set1}</TableCell>
                    <TableCell align="right">{row.set2}</TableCell>
                    <TableCell align="right">{row.set3}</TableCell>
                    <TableCell align="right">{row.set4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </div>
      </div>
    )
  }
}



