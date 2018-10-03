import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return(
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
      </form>
    )
  
  }
}

export default Dashboard;