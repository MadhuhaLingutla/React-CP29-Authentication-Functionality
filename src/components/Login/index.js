// Write your JS code here

import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    const {history} = props
    history.replace('/')
  }

  const onClickLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    loginSuccess(data.jwt_token)
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-button" type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
