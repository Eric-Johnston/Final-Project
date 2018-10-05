import React, { Component } from 'react'
import API from '../../utils/API.js'
// import { auth } from '../../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    if (this.state.password && this.state.email && this.state.first_name) {
        API.saveUser({
            first_name: this.state.first_name,
            email: this.state.email,
            password: this.state.password,
        })
        .then(res => this.isAuthenticated(res))
        .catch(err => console.log(err));
    }
  };

  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <label>First Name</label>
            <input onChange={this.handleInputChange} name="first_name" className="form-control" ref={(first_name) => this.first_name = first_name} placeholder="First Name"/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={this.handleInputChange}  name="email" className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input onChange={this.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          
          <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary orange">Register</button>
        </form>
      </div>
    )
  }
}