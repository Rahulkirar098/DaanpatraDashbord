import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

const Hooks = () => {

  return (
    <div>
      <List>

        <ListItem button component={Link} to="/volunteer">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Volunteer</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/userprofile">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >User Profile</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/contact">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Contactus</ListItemText>
        </ListItem>
        
        <ListItem button component={Link} to="/donationdetails">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Donation Details</ListItemText>
        </ListItem>
        
        <ListItem button component={Link} to="/subadminform">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Sub Admin Form</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/subadmindetails">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Sub Admin Details</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/driverform">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Driver Form</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/driverdetails">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Driver Details</ListItemText>
        </ListItem>

        {/* <ListItem button component={Link} to="/ngoprofile">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Ngo Profile</ListItemText>
        </ListItem> */}

        <ListItem button component={Link} to="/">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Top Slidebar</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/gallery">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >Gallery Images</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/weare">
          <ListItemIcon><ArrowRightAltIcon  /></ListItemIcon>
          <ListItemText >We Are</ListItemText>
        </ListItem>

      </List>
    </div>
  )
}

export default Hooks