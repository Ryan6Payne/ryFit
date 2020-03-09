import React, { useState, useEffect } from "react";
import './Dashboard.scss';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import FB from '../../config/config';


export default function Dashboard() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [pictureUrl, setPictureUrl] = useState(null);

  const initials = FB.getUserInitials();

  //Get data from the database and set the relevant local variables
  function getData() {
    FB.getUserField("fullName").then(setName)
    FB.getUserField("gender").then(setGender)
    FB.isLoggedIn().then(user => {
      FB.db.collection("users")
        .doc(user.uid)
        .onSnapshot(documents => {
          setPictureUrl(documents.data()["pictureUrl"])
        })
    })
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="full-container-dashboard">
      <div className="left-container-dashboard">
        <Paper elevation={20} className={classes.paperL}>
          <div className="dashboard-profile-pic">
            <Avatar alt="my-profile-pic"
              alt="profile-pic"
              src={pictureUrl}
              className={classes.avatar}>
              {initials}
            </Avatar>
          </div>
          <div className="heading-dashboard">
            <h1>{name}</h1>
          </div>
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

const useStyles = makeStyles(theme => ({
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
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: 40,
    border: '2px solid black'
  }
}))