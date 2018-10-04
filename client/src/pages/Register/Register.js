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
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            favorite_genre: this.state.favorite_genre,
            location: this.state.location
        })
        .then(res => this.isAuthenticated(res))
        .catch(err => console.log(err));
    }
  };

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <input onChange={this.handleInputChange} name="first_name" className="form-control" ref={(first_name) => this.first_name = first_name} placeholder="First Name"/>
              </div>

              <div className="form-group">
                <input onChange={this.handleInputChange} name="last_name" className="form-control" ref={(last_name) => this.last_name = last_name} placeholder="Last Name"/>
              </div>

              <div className="form-group">
                <input onChange={this.handleInputChange}  name="email" className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
              </div>

              <div className="form-group">
                <input onChange={this.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
              </div>

              <div className="form-group">
                <select onChange={this.handleInputChange} name="favorite_genre" className="form-control" ref={(favorite_genre) => this.favorite_genre = favorite_genre} placeholder="Favorite Genre">
                  <option selected disabled>Favorite Genre</option>
                  <option>Action</option>
                  <option>Adventure</option>
                  <option>Animation</option>
                  <option>Comedy</option>
                  <option>Crime</option>
                  <option>Documentary</option>
                  <option>Drama</option>
                  <option>Family</option>
                  <option>Fantasy</option>
                  <option>History</option>
                  <option>Horror</option>
                  <option>Music</option>
                  <option>Mystery</option>
                  <option>Romance</option>
                  <option>Science Fiction</option>
                  <option>TV Movie</option>
                  <option>Thriller</option>
                  <option>War</option>
                  <option>Western</option>
                </select>
              </div>

              <div className="form-group">
                <input onChange={this.handleInputChange} name="location" className="form-control" ref={(location) => this.location = location} placeholder="Location"/>
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
            <br />
            <p>Sign in <a href="/">here</a></p>
          </div>
        </div>
      </div>
    )
  }
}