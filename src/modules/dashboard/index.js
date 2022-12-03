/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is landing page of dashboard module here 
 rendering.
 *** Request : 
 *** Response : 
 *** Date : 3Dec 2022
 ***************************************************************************************/
import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import ApiService from "../../services/data"
import Movie from "./movie";

function Dashboard(props) {
     const [movies, setMovies] = useState([])

    useEffect(() => {
        ApiService.movies().then((response)=>{
            if(response?.responseCode === 200){
                setMovies(response?.responseData)
            }
        })
        
    }, []) 
    console.log("movies",movies)
    return (
        <Container maxWidth="xl">
            <h1>Upcoming Movie</h1>
            <div className="movie-section">
             {movies.map((line , i)=>(
                <Movie keys={i} record={line} />
             )
                
             )}   
            <Movie />
            </div>
        </Container>
    );
}
export default Dashboard