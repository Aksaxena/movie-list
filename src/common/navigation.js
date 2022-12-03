/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is Navigation top component. 
 of application
 *** Request : 
 *** Response : 
 *** Date : 9 Oct 2022
 ***************************************************************************************/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "../App.css"
function Navigation() {
  
  return (
    <Container maxWidth="xl">
      <AppBar position="static" sx={{ bgcolor: "rgb(32, 69, 3)" }}>
        <Toolbar variant="dense">
        <Typography variant="h6" sx={{ my: 2 }}>
            Demo
          </Typography>
          <Divider />
          
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navigation;