/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This function is used to fetch movies
 of application
 *** Request : 
 *** Response : 
 *** Date : 3 Dec 2022
 ***************************************************************************************/
import { httpConstants, pathFragments } from "../constants/index";
import {
  httpService,
} from "../utility/httpService";
export default {
  movies,
};
async function getHeaders() {
  return Promise.resolve(true).then(() => {
    return {
      "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
    };
  });
}
/****************************************************************************************
   *** FunctionName : movies
   *** Description : This function is used to fetch movies
   *** Request : 
   *** Response : true/false
   *** dependency : null
   *** Date : 3 DEC 2022
   ***************************************************************************************/
async function movies(pararms) {
  let url = pathFragments.MOVIES;
  return httpService(
    httpConstants.METHOD_TYPE.GET,
    getHeaders(),
    pararms,
    url
  )
    .then((response) => {
      if (response.responseCode !== 200) return Promise.reject(response);
      return Promise.resolve(response);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}






