import React, { useState, useEffect } from "react";
import Loading from '../../components/Loading/Loading';
import FB from '../../config/config';

function Workout() {

  const [isLoading, setisLoading] = useState(false)

  const [benchPress, setBenchPress] = useState('')
  const [deadlift, setDeadlift] = useState('')
  const [shoulderPress, setShoulderPress] = useState('')
  const [squat, setSquat] = useState('')


  useEffect(() => {
    FB.getWorkoutField("deadlift").then(setDeadlift)
    FB.getWorkoutField("benchPress").then(setBenchPress)
    FB.getWorkoutField("shoulderPress").then(setShoulderPress)
    FB.getWorkoutField("squat").then(setSquat)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <p></p>
    </div>
  );
}

export default Workout;
