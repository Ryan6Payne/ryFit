import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import { makeStyles } from "@material-ui/core/styles"
import moment from 'moment';

import './Users.scss';

export default function Profile(props) {

  const classes = useStyles()
  const { history } = props;
  const [users, setUsers] = useState([])
  const [numUsers, setNumUsers] = useState(0)

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

  function userAmount() {
    FB.db.collection("users").get().then(snap => {
      let size = snap.size;
      setNumUsers(size)
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
