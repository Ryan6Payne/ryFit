import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import { makeStyles } from "@material-ui/core/styles"
import moment from 'moment';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


import './Users.scss';

export default function Profile(props) {

  const classes = useStyles()
  const { history } = props;
  const [users, setUsers] = useState([])
  const [numUsers, setNumUsers] = useState(0)
  const [userEmail, setUserEmail] = useState("")

  function getUsers() {
    const ref = FB.db.collection('users')
    ref.get().then(snapshot => {
      const usersArr = []
      const usersIdArr = []
      snapshot.forEach(doc => {
        const data = doc.data()
        usersArr.push(data)

      })
      setUsers(usersArr)
    }).catch(error => console.log(error))
  }

  function userAmount() {
    FB.db.collection("users").get().then(snap => {
      let size = snap.size;
      setNumUsers(size)
    })
  }

  function deleteUser(userEmail) {

    FB.getUserByEmail(userEmail).then(snapshot => {
      snapshot.forEach(doc => {
        let uid = doc.id
        FB.deleteUser(uid)
        alert(`User ${userEmail} has been deleted!`)
        window.location.reload(false);
      })
    })
  }

  useEffect(() => {
    getUsers();
    userAmount()
  }, [])

  return (
    <div className="page-container-users">
      <div className="users-heading-container">
        <h2>We have {numUsers} users currently signed up</h2>
      </div>
      <div className="user-delete-container">
        <TextField
          className={classes.TextField}
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          placeholder="Enter the email of the account you want to delete"
          variant="outlined"
        />
        <Button onClick={() => deleteUser(userEmail)} variant="outlined" color="secondary">Delete User</Button>
      </div>
      <div className="all-users-container">
        {
          users &&
          users.map(user => {
            let stamp = user.joined.toDate().toString()
            stamp = moment(stamp).format('MMMM Do YYYY')
            return (
              <div className="full-user-container">
                <h4>{user.fullName}</h4>
                <div className="user-info-container">
                  <p className="user-info-sections">Joined:</p>
                  <p> {stamp}</p>
                </div>
                <div className="user-info-container">
                  <p className="user-info-sections">Email:</p>
                  <p>{user.email}</p>
                </div>
                <div className="user-info-container">
                  <p className="user-info-sections">Generated Workouts:</p>
                  <p>{user.workouts}</p>
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
  TextField: {
    width: '380px',
    marginRight: '20px'
  },
}))
