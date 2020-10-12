import http from 'api'

const login = (username:string, password:string) => http.send({
  method: 'POST',
  url: '/auth/auth/password_login/',
  data: {
    username,
    password,
  }
})

export default {
  login
}