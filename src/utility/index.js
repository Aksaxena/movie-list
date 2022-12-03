/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is utility file to manage our utility things here.
 of application
 *** Request : 
 *** Response : 
 *** Date : 9 Oct 2022
 ***************************************************************************************/
import ToastService from "react-material-toast";

const toast = ToastService.new({
    place: "topRight",
    duration: 4,
    maxCount: 2,
    
});
// const cookies = new Cookies();
const utility = {
    apiFailureToast,
    apiSuccessToast,
    apiWarningToast,
    parseResponse,
};
export default utility;

/**
 *              This function is made to handle success and error callback!
 * @param promise
 * @returns {Promise<Promise|Bluebird<*[] | R>|Bluebird<any | R>|*|Promise<T | *[]>>}
 */
function parseResponse(promise) {
    return promise
        .then((data) => {
            return [null, data];
        })
        .catch((err) => [err]);
}

export const dispatchAction = (type, data) => {
    return (dispatch) => dispatch({type, data});
};

function apiFailureToast(message) {
    toast.error(message ? message : "apiConstant.API_FAILURE");
}

function apiSuccessToast(msg) {
    toast.success(msg ? msg : "apiConstant.API_SUCCESS");
}
function apiWarningToast(msg) {
    toast.warning(msg ? msg : "apiConstant.API_SUCCESS");
}