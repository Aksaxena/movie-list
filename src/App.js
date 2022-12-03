/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This File is heart of this application, we can say this is entry point 
 of application
 *** Request : 
 *** Response : 
 *** Date : 3 Dec 2022
 ***************************************************************************************/
import React from 'react';
import AppRouter from './AppRoutes';
import Navigation from './common/navigation';
import "./App.css"
function App() {
  return (
    <div className='App'>
      {/* this is comman Navigation compoment which is available on all component */}
      <Navigation />
      {/* this is application route component for application */}
      <AppRouter />
    </div>
  );
}

export default App;
