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

  }

  function getLatestWorkout() {
    const ref = FB.db.doc(`users/${FB.auth.currentUser.uid}`).collection("workouts")

    ref.orderBy("timeStamp", "desc").limit(1).get().then((snapshot) => {
      snapshot.docs.forEach(async doc => {
        const data = await FB.db.doc(`users/${FB.auth.currentUser.uid}/workouts/${doc.id}`).get()
        setDeadlift(data.get("deadlift"))
        setBenchPress(data.get("benchPress"))
        setShoulderPress(data.get("shoulderPress"))
        setSquat(data.get("squat"))
      })
    })
  }

  setTimeout(function () {
    setisLoading(false)
  }, delay)

  useEffect(() => {
    getData();
    getLatestWorkout();
  }, [])

  function createData(workout, set1, set2, set3, set4) {
    return { workout, set1, set2, set3, set4 }
  }

  const rowsWeek1 = [
    createData('Deadlift', deadlift + 'x10', Math.round(deadlift * 1.20) + 'x5', Math.round(deadlift * 1.25) + 'x3', Math.round(deadlift * 1.30) + 'x1'),
    createData('Bench Press', benchPress + 'x10', Math.round(benchPress * 1.20) + 'x5', Math.round(benchPress * 1.25) + 'x3', Math.round(benchPress * 1.30) + 'x1'),
    createData('Shoulder Press', shoulderPress + 'x10', Math.round(shoulderPress * 1.20) + 'x5', Math.round(shoulderPress * 1.25) + 'x3', Math.round(shoulderPress * 1.30) + 'x1'),
    createData('Squat', squat + 'x10', Math.round(squat * 1.20) + 'x5', Math.round(squat * 1.25) + 'x3', Math.round(squat * 1.30) + 'x1')
  ]


  const w2Deadlift = (deadlift + 1);
  const w2BenchPress = (benchPress + 1);
  const w2ShoulderPress = (shoulderPress + 1);
  const w2Squat = (squat + 1);

  const rowsWeek2 = [
    createData('Deadlift', (w2Deadlift) + 'x10', Math.round(w2Deadlift * 1.20) + 'x5', Math.round(w2Deadlift * 1.25) + 'x3', Math.round(w2Deadlift * 1.30) + 'x1'),
    createData('Bench Press', (w2BenchPress) + 'x10', Math.round(w2BenchPress * 1.20) + 'x5', Math.round(w2BenchPress * 1.25) + 'x3', Math.round(w2BenchPress * 1.30) + 'x1'),
    createData('Shoulder Press', (w2ShoulderPress) + 'x10', Math.round(w2ShoulderPress * 1.20) + 'x5', Math.round(w2ShoulderPress * 1.25) + 'x3', Math.round(w2ShoulderPress * 1.30) + 'x1'),
    createData('Squat', (w2Squat) + 'x10', Math.round(w2Squat * 1.20) + 'x5', Math.round(w2Squat * 1.25) + 'x3', Math.round(w2Squat * 1.30) + 'x1')
  ]

  const w3Deadlift = (deadlift + 2);
  const w3BenchPress = (benchPress + 2);
  const w3ShoulderPress = (shoulderPress + 2);
  const w3Squat = (squat + 2);

  const rowsWeek3 = [
    createData('Deadlift', (w3Deadlift) + 'x10', Math.round(w3Deadlift * 1.20) + 'x5', Math.round(w3Deadlift * 1.25) + 'x3', Math.round(w3Deadlift * 1.30) + 'x1'),
    createData('Bench Press', (w3BenchPress) + 'x10', Math.round(w3BenchPress * 1.20 + 2) + 'x5', Math.round(w3BenchPress * 1.25 + 2) + 'x3', Math.round(w3BenchPress * 1.30) + 'x1'),
    createData('Shoulder Press', (w3ShoulderPress) + 'x10', Math.round(w3ShoulderPress * 1.20) + 'x5', Math.round(w3ShoulderPress * 1.25) + 'x3', Math.round(w3ShoulderPress * 1.30) + 'x1'),
    createData('Squat', (w3Squat) + 'x10', Math.round(w3Squat * 1.20) + 'x5', Math.round(w3Squat * 1.25) + 'x3', Math.round(w3Squat * 1.30) + 'x1')
  ]

  const w4Deadlift = (deadlift + 3);
  const w4BenchPress = (benchPress + 3);
  const w4ShoulderPress = (shoulderPress + 3);
  const w4Squat = (squat + 3);

  const rowsWeek4 = [
    createData('Deadlift', (w4Deadlift) + 'x10', Math.round(w4Deadlift * 1.20) + 'x5', Math.round(w4Deadlift * 1.25) + 'x3', Math.round(w4Deadlift * 1.30) + 'x1'),
    createData('Bench Press', (w4BenchPress) + 'x10', Math.round(w4BenchPress * 1.20) + 'x5', Math.round(w4BenchPress * 1.25) + 'x3', Math.round(w4BenchPress * 1.30) + 'x1'),
    createData('Shoulder Press', (w4ShoulderPress) + 'x10', Math.round(w4ShoulderPress * 1.20) + 'x5', Math.round(w4ShoulderPress * 1.25) + 'x3', Math.round(w4ShoulderPress * 1.30) + 'x1'),
    createData('Squat', (w4Squat) + 'x10', Math.round(w4Squat * 1.20) + 'x5', Math.round(w4Squat * 1.25) + 'x3', Math.round(w4Squat * 1.30) + 'x1')
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



