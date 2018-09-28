import React from 'react';
import './IconsTray.css';
import {AddVideoIcon} from '..//AddVideoIcon/AddVideoIcon';
import {AppsIcon} from '../AppsIcon/AppsIcon';
import {MessagesIcon} from '../MessagesIcon/MessagesIcon';
import {NotificationsIcon} from '../NotificationsIcon/NotificationsIcon';
import {UserProfileIcon} from '../UserProfileIcon/UserProfileIcon';

export const IconsTray = () => {
  return (
    <div className="col-md-3 iconsTrayContainer">
      <AddVideoIcon />
      <AppsIcon />
      <MessagesIcon />
      <NotificationsIcon />
      <UserProfileIcon />
    </div>
  )
};