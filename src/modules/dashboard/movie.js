/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is landing page of dashboard module here 
 *** Request : 
 *** Response : 
 *** Date : 3 dec 2022
 ***************************************************************************************/
import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


function Movie(props) {
    return (
        <>
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props?.record?.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <Button size="small" color="primary">
        {props?.record?.rating}
        </Button>
        <Button size="small" color="secondary">
        {props?.record?.released_date}
        </Button>
      </CardActions>
    </Card>
    
        </>
    );
}
export default Movie