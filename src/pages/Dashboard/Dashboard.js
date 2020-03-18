import React, { useState, useEffect } from "react";
import './Dashboard.scss';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import FB from '../../config/config';
import { Slider } from '@material-ui/core';
import { Button } from '@material-ui/core'


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
  const [heightBMR, setHeightBMR] = useState(142)
  const [weightBMR, setWeightBMR] = useState(66)

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
    await FB.getUserField("dobYear").then(async field => {
      const month = await FB.getUserField("dobMonth")

      const today = new Date();

      const todayMonth = today.getMonth();

      const year = today.getFullYear();

      const birthYear = field;

      if (todayMonth < month) {
        setAge((year - birthYear) - 1)
      } else {
        setAge(year - birthYear)
      }
    })
  }

  useEffect(() => {
    getData();
    getAge();
  }, []);

  function generate() {
    if (gender == true) {
      console.log("male")
      setBMR(Math.round(66.5 + (13.75 * weightBMR) + (5.003 * heightBMR) - (6.755 * age)))
      const heightInMeters = heightBMR / 100
      const floatBMI = parseFloat(weightBMR / (heightInMeters * heightInMeters)).toFixed(2)
      setBMI(floatBMI)
    }
  }

  const handleChangeHeightBMR = (event, newValue) => {
    setHeightBMR(newValue);
  };

  const handleChangeWeightBMR = (event, newValue) => {
    setWeightBMR(newValue);
  };

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
        {/* <Paper elevation={20} className={classes.paperB}>
          <div className="calc-headings">
            <h1>BMI</h1>
          </div>
        </Paper> */}
        <Paper elevation={20} className={classes.paperB}>
          <div className="calc-headings">
            <h1>BMR &amp; BMI Calculator</h1>
          </div>
          <div className="calc-sliders">
            <div className="calc-height-slider">
              <p>Height:</p>
              <Slider
                className={classes.slider}
                defaultValue={142}
                aria-labelledby="discrete-slider-always"
                valueLabelDisplay="on"
                marks={marksWeight}
                max={200}
                min={120}
                track={false}
                value={heightBMR}
                onChange={handleChangeHeightBMR}
              />
              <p></p>
            </div>
            <div className="calc-weight-slider">
              <p>Weight:</p>
              <Slider
                className={classes.slider}
                defaultValue={32}
                aria-labelledby="discrete-slider-always"
                valueLabelDisplay="on"
                marks={marksHeight}
                max={140}
                min={20}
                track={false}
                value={weightBMR}
                onChange={handleChangeWeightBMR}
              />
            </div>
            <div className="calc-button">
              <Button variant="outlined" color="primary" onClick={generate}>
                Generate your BMR &amp; BMI
          </Button>
            </div>
          </div>

        </Paper>
      </div>
    </div >

  )
}


const marksWeight = [
  {
    value: 120,
    label: '120cm'
  },
  {
    value: 140,
    label: '140cm'
  },
  {
    value: 160,
    label: '160cm'
  },
  {
    value: 180,
    label: '180cm'
  },
  {
    value: 200,
    label: '200cm'
  }
];

const marksHeight = [
  {
    value: 20,
    label: '20kg'
  },
  {
    value: 40,
    label: '40kg'
  },
  {
    value: 60,
    label: '60kg'
  },
  {
    value: 80,
    label: '80kg'
  },
  {
    value: 100,
    label: '100kg'
  },
  {
    value: 120,
    label: '120kg'
  },
  {
    value: 140,
    label: '140kg'
  }
]

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
  slider: {
    width: '75%',
  }

}))