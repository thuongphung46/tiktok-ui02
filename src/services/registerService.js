import * as httpRequest from '~/utils/httpRequest'

export const  registerService = async (username, password) => {
  try {
    return await httpRequest.post('auth/register', {
      username: username,
      password: password,
    })
  } catch (error) {
    return error.response.data
  }
}