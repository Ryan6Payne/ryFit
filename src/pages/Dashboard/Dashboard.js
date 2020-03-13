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
  const [location, setLocation] = useState('');
  const [dobYear, setDobYear] = useState('');

  const [age, setAge] = useState('');
  const [BMI, setBMI] = useState(null);
  const [BMR, setBMR] = useState(null);

  const initials = FB.getUserInitials();

  //Get data from the database and set the relevant local variables
  function getData() {
    FB.getUserField("fullName").then(setName)
    FB.getUserField("gender").then(setGender)
    FB.getUserField("location").then(setLocation)
    FB.isLoggedIn().then(user => {
      FB.db.collection("users")
        .doc(user.uid)
        .onSnapshot(documents => {
          setPictureUrl(documents.data()["pictureUrl"])
        })
    })
  }

  async function getAge() {
    await FB.getUserField("dobYear").then(field => {
      const date = new Date();
      const year = date.getFullYear();
      const byear = field;
      setAge(year - byear)
    })
  }

  function getStats() {
    if (BMI === null) {
      setBMI("N/A")
    }

    if (BMR === null) {
      setBMR("N/A")
    }
  }

  useEffect(() => {
    getData();
    getAge();
    getStats();
  }, []);

  return (
    <div className="full-container-dashboard">
      <div className="top-container-dashboard">
        <Paper elevation={20} className={classes.paperT}>
          <div className="top-info-container-dashboard">
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
              <p>{location}</p>
            </div>
          </div>
          <div className="top-content-container-dashboard">
            <div>
              <h3>AGE</h3>
              <div className="dashboard-circles">
                {age}
              </div>
            </div>
            <div>
              <h3>BMI</h3>
              <div className="dashboard-circles">
                {BMI}
              </div>
            </div>
            <div>
              <h3>BMR</h3>
              <div className="dashboard-circles">
                {BMR}
              </div>
            </div>
          </div>
        </Paper>
      </div>
      <div className="bottom-container-dashboard">
        <Paper elevation={20} className={classes.paperB}>

        </Paper>
        <Paper elevation={20} className={classes.paperB}>

        </Paper>
      </div>
    </div >

  )
}


const useStyles = makeStyles(theme => ({
  paperB: {
    width: '45%',
    border: '1px solid black',
    height: '90%',
    marginBottom: 20,
  },
  paperT: {
    width: '45%',
    border: '1px solid black',
    height: '90%'
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    fontSize: 30,
    border: '2px solid black'
  },

}))


{/*const useStyles = makeStyles(theme => ({
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
    </div > */}