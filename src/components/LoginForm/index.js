// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    usernameInput: '',
    showErrorMsg: false,
    password: '',
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {usernameInput, password} = this.state
    const userDetails = {usernameInput, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserNameInput = () => {
    const {usernameInput} = this.state

    return (
      <>
        <label htmlFor="userName" className="label">
          USERNAME
        </label>
        <input
          type="text"
          value={usernameInput}
          placeholder="Username"
          onChange={this.onChangeUsername}
          id="userName"
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
          id="password"
        />
      </>
    )
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state

    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="image"
        />
        <form className="form-container" onSubmit={this.onSubmitLoginForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo"
          />
          <div className="input-container">{this.renderUserNameInput()}</div>
          <div className="input-container">{this.renderPasswordInput()}</div>
          <button type="submit">Login</button>
          {showErrorMsg && <p className="description">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
