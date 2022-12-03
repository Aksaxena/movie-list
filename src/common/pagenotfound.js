/****************************************************************************************
 *** Author: Alok saxena
 *** Description : this is page not found component when any url hit by user is not found in 
 application this file will render for user with basic info and return to home page
 of application
 *** Request : 
 *** Response : 
 *** Date : 9 Oct 2022
 ***************************************************************************************/
import * as React from 'react';
import Container from '@mui/material/Container';
import "../App.css"
function Pagenotfound() {
  
  return (
    <Container maxWidth="xl">
      <div id="error-page">
         <div class="content">
            <h2 class="header" data-text="404">
               404
            </h2>
            <h4 data-text="Opps! Page not found">
               Opps! Page not found
            </h4>
            <p>
               Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
            </p>
            <div class="btns">
               <a href="/">return home</a>
            </div>
         </div>
      </div>
    </Container>
  );
}

export default Pagenotfound;