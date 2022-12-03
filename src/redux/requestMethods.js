import axios from "axios";
const BASE_URL = "http://localhost:4000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2IwMDIwNDRhNzU0NTdlMTE5NmFjYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTYyMjI2MSwiZXhwIjoxNjY5ODgxNDYxfQ.uGjPDl1-Qek6lC4m9E2UrdTqapY0Aj3qYN6zh0BcDs4";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
