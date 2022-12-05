// import axios from 'axios';

// const httpRequest = axios.create({
//   //   baseURL: process.env.REACT_APP_BASE_URL,
// });
import axios from 'axios'

const httpRequest = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: 'http://localhost:3500/',
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',

  timeout: 1000,
})

export const get = async (uri, options = {}) => {
  const response = await httpRequest.get(uri, options)
  return response.data
}

export const post = async (uri, data, options = {}) => {
  const response = await httpRequest.post(uri, data, options)
  return response.data
}

export default httpRequest


