import React, { Component } from "react";
import FB from '../../config/config';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"


import './Profile.scss';

export default function Profile() {

  const classes = useStyles()
  const initials = FB.getUserInitials();

  return (
    <div className="full-container-profile">
      <div className="inner-container-profile">

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
    </div>
  );
}


const useStyles = makeStyles(theme => ({

  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: 40
  },

  input: {
    display: "none"
  },

  icon: {
    width: theme.spacing(5),
    height: theme.spacing(5)
  }
}))
