import React, { useState, useEffect } from "react";
import FB from '../../config/config';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from '@material-ui/core';
import { MenuItem, Select, FormControl } from '@material-ui/core';
import { Button } from '@material-ui/core';


import './Profile.scss';

export default function Profile(props) {

  const classes = useStyles()
  const initials = FB.getUserInitials();

  //const { history } = props;
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [gender, setGender] = useState('');
  const [dobDay, setDobDay] = useState(null);
  const [dobMonth, setDobMonth] = useState(null);
  const [dobYear, setDobYear] = useState(null);
  const [fullName, setFullName] = useState('');

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const firstNameSplit = fullName.split(" ")[0];
  const secondNameSplit = fullName.split(" ")[1];

  useEffect(() => {
    FB.getUserField("fullName").then(setFullName)
    FB.getUserField("firstName").then(setFirstName)
    FB.getUserField("secondName").then(setSecondName)
    FB.getUserField("currentWeight").then(setCurrentWeight)
    FB.getUserField("dobDay").then(setDobDay)
    FB.getUserField("dobMonth").then(setDobMonth)
    FB.getUserField("dobYear").then(setDobYear)
    FB.getUserField("gender").then(setGender)
    FB.getUserField("goalWeight").then(setGoalWeight)
    FB.getUserField("heightFt").then(setHeightFt)
    FB.getUserField("heightIn").then(setHeightIn)
  }, [])

  async function updateProfile() {
    try {
      await FB.updateUser(fullName, firstNameSplit, secondNameSplit, heightFt, heightIn, currentWeight,
        goalWeight, gender, dobDay, dobMonth, dobYear);
      await FB.updateName(fullName);
      alert("You have updated your profile!")
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="full-container-profile">
      <div className="header-container-profile">
        <Paper elevation={0} className="profile-picture">
          <input
            accept="image/*"
            className={classes.input}
            id="profile-pic"
            type="file"
          />
          <Badge
            overlap="circle"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            badgeContent={
              <label htmlFor="profile-pic">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <ImageIcon className={classes.icon} color="action" fontSize="large" />
                </IconButton>
              </label>
            }
          >
            <Avatar alt="my-profile-pic" className={classes.avatar}>
              {initials}
            </Avatar>
          </Badge>
        </Paper>
      </div>
      <form onSubmit={e => e.preventDefault() && false}>
        <div className="content-container-profile">
          <Paper elevation={20} className="update-details-profile">
            <Typography className="profile-h4-typo" variant="h5">
              Update your details
            </Typography>
            <div className="profile-inputs">
              <div className="profile-input-name">
                <p> Name </p>
                <TextField className="inputtf-name" id="outlined-basic" value={fullName} label="Full Name" variant="outlined" onChange={e => setFullName(e.target.value)} />
              </div>
              <div className="profile-input">
                <p> Height: </p>
                <TextField className="profile-inputtf" id="outlined-basic" value={heightFt} label="Kg" variant="outlined" onChange={e => setHeightFt(e.target.value)} />
                <p></p>
                <TextField className="profile-inputtf" id="outlined-basic" value={heightIn} label="In" variant="outlined" onChange={e => setHeightIn(e.target.value)} />
              </div>
              <div className="profile-input">
                <p> Current Weight: </p>
                <TextField className="profile-inputtf" id="outlined-basic" value={currentWeight} label="Kg" variant="outlined" onChange={e => setCurrentWeight(e.target.value)} />
              </div>
              <div className="profile-input">
                <p> Goal Weight: </p>
                <TextField className="profile-inputtf" id="outlined-basic" value={goalWeight} label="Kg" variant="outlined" onChange={e => setGoalWeight(e.target.value)} />
              </div>
            </div>

            <div className="profile-input-selector">
              <FormControl variant="outlined" >
                <div className="profile-input">
                  <p>Gender: </p>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={gender}
                    onChange={e => setGender(e.target.value)}
                    className="select"
                  >
                    <MenuItem value={true}>Male</MenuItem>
                    <MenuItem value={false}>Female</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </div>
            <div className="profile-input-selector">
              <FormControl variant="outlined" >
                <div className="profile-input">
                  <p>Date of Birth: </p>
                  <Select
                    labelId="dob-day-select-profile"
                    id="dob-day-select-profile"
                    value={dobDay}
                    onChange={e => setDobDay(e.target.value)}
                    className="selectDobDay"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                    <MenuItem value={19}>19</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={21}>21</MenuItem>
                    <MenuItem value={22}>22</MenuItem>
                    <MenuItem value={23}>23</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={25}>25</MenuItem>
                    <MenuItem value={26}>26</MenuItem>
                    <MenuItem value={27}>27</MenuItem>
                    <MenuItem value={28}>28</MenuItem>
                    <MenuItem value={29}>29</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    <MenuItem value={31}>31</MenuItem>
                  </Select>
                  <p></p>
                  <Select
                    labelId="dob-month-select-profile"
                    id="dob-month-select-profile"
                    value={dobMonth}
                    onChange={e => setDobMonth(e.target.value)}
                    className="selectDobMonth"
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                  </Select>
                  <p></p>
                  <Select
                    labelId="dob-year-select-profile"
                    id="dob-year-select-profile"
                    value={dobYear}
                    onChange={e => setDobYear(e.target.value)}
                    className="selectDobYear"
                  >
                    <MenuItem value={1971}>1971</MenuItem>
                    <MenuItem value={1972}>1972</MenuItem>
                    <MenuItem value={1973}>1973</MenuItem>
                    <MenuItem value={1974}>1974</MenuItem>
                    <MenuItem value={1975}>1975</MenuItem>
                    <MenuItem value={1976}>1976</MenuItem>
                    <MenuItem value={1977}>1977</MenuItem>
                    <MenuItem value={1978}>1978</MenuItem>
                    <MenuItem value={1979}>1979</MenuItem>
                    <MenuItem value={1980}>1980</MenuItem>
                    <MenuItem value={1981}>1981</MenuItem>
                    <MenuItem value={1982}>1982</MenuItem>
                    <MenuItem value={1983}>1983</MenuItem>
                    <MenuItem value={1984}>1984</MenuItem>
                    <MenuItem value={1985}>1985</MenuItem>
                    <MenuItem value={1986}>1986</MenuItem>
                    <MenuItem value={1987}>1987</MenuItem>
                    <MenuItem value={1988}>1988</MenuItem>
                    <MenuItem value={1989}>1989</MenuItem>
                    <MenuItem value={1990}>1990</MenuItem>
                    <MenuItem value={1991}>1991</MenuItem>
                    <MenuItem value={1992}>1992</MenuItem>
                    <MenuItem value={1993}>1993</MenuItem>
                    <MenuItem value={1994}>1994</MenuItem>
                    <MenuItem value={1995}>1995</MenuItem>
                    <MenuItem value={1996}>1996</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                    <MenuItem value={1998}>1998</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={2001}>2001</MenuItem>
                    <MenuItem value={2002}>2002</MenuItem>
                    <MenuItem value={2003}>2003</MenuItem>
                    <MenuItem value={2004}>2004</MenuItem>
                  </Select>
                </div>
              </FormControl>
            </div>
            <div className="profile-buttons">
              <Button className="profile-update-button" variant="outlined" color="primary" type="submit" onClick={updateProfile}>
                Update
              </Button>
            </div>

          </Paper>

          <Paper elevation={20} className="progress-profile">
            <Typography className="profile-h4-typo" variant="h5">
              Your progress
            </Typography>
          </Paper>
        </div>
      </form>
    </div>

  );
}


const useStyles = makeStyles(theme => ({

  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: 40,

  },

  input: {
    display: "none"
  },

  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}))
