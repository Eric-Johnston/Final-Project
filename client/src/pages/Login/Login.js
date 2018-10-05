import React, { Component } from 'react'
import API from '../../utils/API.js'
// import { login, resetPassword } from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}


export default class Login extends Component {
  state = { loginMessage: null }
  handleSubmit = (e) => {
    e.preventDefault()
    // login(this.email.value, this.pw.value)
    //   .catch((error) => {
    //       this.setState(setErrorMsg('Invalid username/password.'))
    //     })
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

isAuthenticated(auth){
  if (auth.status === 200){
      console.log(auth.config.data);
      this.setState({
          authenticated: true
      });
      app.get("/test", function(req, res) {
        res.sendFile(path.join(__dirname, "../../test.html"));
      });   
  }
}

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    if (this.state.password && this.state.email) {
        API.getUser({
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => this.isAuthenticated(res))
        .catch(err => console.log(err));
    }
  };
  // resetPassword = () => {
  //   resetPassword(this.email.value)
  //     .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
  //     .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  // }
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1> Login </h1>
        <form>
          <div className="form-group">
            <input onChange={this.handleInputChange} name="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input onChange={this.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" />
          </div>
          {
            this.state.loginMessage &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              {/* &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a> */}
            </div>
          }
          <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary orange">Login</button>
          </form>
          <br />
                        <p>Or sign up <a href="/Signin">here</a></p>
      </div>
    )
  }
}