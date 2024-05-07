const BASE_URL = "http://localhost:4000/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  LOGIN_API: BASE_URL + "/auth/login",
  SIGNUP_API: BASE_URL + "/auth/signup",
  GET_ALL_GROUP_API: BASE_URL + "/group/getAllGroups",
  GET_VERIFIED_GROUP_API: BASE_URL + "/group/verifyGroup",
  GET_CODES_SUMMARY: BASE_URL + "/code/getCodes",
  DELETE_CODE_API: BASE_URL + "/code/deleteCode",
  PUBLISH_CODE_API: BASE_URL + "/code/publishCode",
  CREATE_CODE_API: BASE_URL + "/code/createCode",
  UPDATE_CODE_API: BASE_URL + "/code/updateCode",
  GET_ID_PRESENT: BASE_URL + "/code/isIdPresent",
}