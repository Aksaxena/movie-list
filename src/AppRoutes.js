/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is route file 
 of application
 *** Request : 
 *** Response : 
 *** Date : 3 DEC 2022
 ***************************************************************************************/
import React from 'react';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import Dashboard from './modules/dashboard';
import Pagenotfound from './common/pagenotfound';
function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter 
