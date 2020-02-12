import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { MenuItem, Select, InputLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import './Registerprof.scss';

function RegisterProf(props) {
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="md">
      <form>
        <Paper className="paper" elevation={20}>
          <Typography className="Typo" variant="h4">Tell us more about yourself</Typography>
          <div className="input">
            <p> Height: </p>
            <TextField className="inputtf" id="outlined-basic" label="Ft" variant="outlined" />
            <p></p>
            <TextField className="inputtf" id="outlined-basic" label="In" variant="outlined" />
          </div>
          <div className="input">
            <p> Current Weight: </p>
            <TextField className="inputtf" id="outlined-basic" label="Kg" variant="outlined" />
          </div>
          <div className="input">
            <p> Goal Weight: </p>
            <TextField className="inputtf" id="outlined-basic" label="Kg" variant="outlined" />
          </div>
          <FormControl className="input" variant="outlined" >
            <div className="input">

              <p>Gender: </p>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChange}
                className="select"
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </div>
          </FormControl>
        </Paper>
      </form>
    </Container>
  );
}

export default RegisterProf;
