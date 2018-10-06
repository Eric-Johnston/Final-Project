import React, { Component } from 'react';
import './NameForm.css';



class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <label>
            Last Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>

          <label>
            Email:
            <input type="email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Confirm Password:
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />


          <select>
          <option selected value="Favorite Genre">Favorite Genre</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
            <option value="family">family</option>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="music">Music</option>
            <option value="mystery">Mystery</option>
            <option value="romance">Romance</option>
            <option value="sciencefiction">Science Fiction</option>
            <option value="tvmovie">TV Movie</option>
            <option value="thriller">Thriller</option>
            <option value="war">War</option>
             <option value="western">Western</option>

</select>
        </form>
      );
    }
  }
  export default NameForm;