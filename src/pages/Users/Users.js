import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import { makeStyles } from "@material-ui/core/styles"
import moment from 'moment';

import './Users.scss';

export default function Profile(props) {

  const classes = useStyles()
  const { history } = props;
  const [users, setUsers] = useState([])


  //Get data from the Database then set the relevant local variables
  function getUsers() {
    const ref = FB.db.collection('users')

    ref.get().then(snapshot => {
      const usersArr = []
      snapshot.forEach(doc => {
        const data = doc.data()
        usersArr.push(data)
      })
      setUsers(usersArr)
    }).catch(error => console.log(error))
  }

  /* function getWorkouts() {
    const ref = FB.db.doc(`users/${FB.auth.currentUser.uid}`).collection("workouts")

    ref.orderBy("timeStamp", "desc").limit(5)
      .get()
      .then(snapshot => {
        const workoutsArr = []
        snapshot.forEach(doc => {
          const data = doc.data()
          workoutsArr.push(data)
        })
        setWorkouts(workoutsArr)

      }).catch(error => console.log(error))
  } */

  useEffect(() => {
    getUsers();
  }, [])

  function testButton() {
    console.log(users)
  }

  return (
    <div className="page-container-users">
      <div className="all-users-container">
        {
          users &&
          users.map(user => {
            let stamp = user.joined.toDate().toString()
            stamp = moment(stamp).format('MMMM Do YYYY')
            console.log(stamp)
            return (
              <div className="full-user-container">
                <h4>{user.fullName}</h4>
                <div className="user-info-container">
                  <h5>Joined:</h5>
                  <p>{stamp}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div >
  );
}


const useStyles = makeStyles(theme => ({
}))
