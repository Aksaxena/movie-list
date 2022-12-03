
/****************************************************************************************
 *** Author: Alok saxena
 *** Description : This is Constant file to manage constant variables.
 of application
 *** Request : 
 *** Response : 
 *** Date : 8 Oct 2022
 ***************************************************************************************/


const httpConstants = {
  
  METHOD_TYPE: {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  CONTENT_TYPE: {
    APPLICATION_JSON: "application/json",
    MULTIPART_FORM_DATA: "multipart/form-data",
    APPLICATION_FORM_URLENCODED: "application/x-www-form-urlencoded",
    IMAGE_PNG: "image/png",
  },
  HEADER_TYPE: {
    URL_ENCODED: "application/x-www-form-urlencoded",
    APPLICATION_JSON: "application/json",
  },
  HEADER_KEYS: {
    CONTENT_TYPE: "Content-Type",
    ACCEPT: "Accept",
    AUTHORIZATION: "Authorization",
    DEVICE_TYPE: "device-type",
    DEVICE_ID: "device-id",
    SESSION_TOKEN: "session-token",
    PUSH_TOKEN: "push-token",
  },
  DEVICE_TYPE: {
    ANDROID: "android",
    IOS: "ios",
    WEB: "web",
  },
  RESPONSE_STATUS: {
    SUCCESS: true,
    FAILURE: false,
  },
  RESPONSE_CODES: {
    UNAUTHORIZED: 401,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    OK: 200,
    NO_CONTENT_FOUND: 204,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    GONE: 410,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUEST: 429,
  },
  LOG_LEVEL_TYPE: {
    INFO: "info",
    ERROR: "error",
    WARN: "warn",
    VERBOSE: "verbose",
    DEBUG: "debug",
    SILLY: "silly",
    FUNCTIONAL: "functional",
    HTTP_REQUEST: "http request",
  },
  API_END_POINT: {},
};
const pathFragments = {
  MOVIES: "http://localhost:5000/movieList",
};


const genericConstants = {
  DEVICE_TYPE: {},
};
const apiSuccessMessage = {
  FETCH_SUCCESS: "Information fetched successfully",
};
const apiFailureMessage = {
  INVALID_PARAMS: "Invalid Parameters",
  FETCH_FAIL: "Could not fetch",
  INVALID_REQUEST: "Something went wrong",
  INVALID_SESSION_TOKEN: "Invalid session token",
  INTERNAL_SERVER_ERROR: "Internal server Error",
  BAD_REQUEST: "Bad Request!",
  DEVICE_ID_OR_SESSION_TOKEN_EMPTY:
    "Device id or session token can't be empty or null",
  SESSION_GENERATION: "Unable to generate session!",
  SESSION_EXPIRED: "Session Expired!",
};
const permissionIdentifier = {
  API_PERMISSION_ID: ["USER:CREATE"], // ENTITY:OPERATION
};



module.exports = {
  apiFailureMessage,
  apiSuccessMessage,
  genericConstants,
  httpConstants,
  pathFragments,
};
