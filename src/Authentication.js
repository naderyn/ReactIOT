import React, { Component } from 'react';

class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleSignup({ username, password });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({ username, password });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

class Authentication extends Component {
  state = {
    isLoggedIn: false,
    username: '',
  };

  handleSignup = (formData) => {
   
    const { username } = formData;
    this.setState({
      isLoggedIn: true,
      username: username,
    });
  };

  handleLogin = (formData) => {
   
    const { username } = formData;
    this.setState({
      isLoggedIn: true,
      username: username,
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div>
        {!isLoggedIn ? (
          <Signup handleSignup={this.handleSignup} />
        ) : (
          <Login handleLogin={this.handleLogin} />
        )}
        {isLoggedIn && <p>Welcome, {username}^_^</p>}
      </div>
    );
  }
}

export default Authentication;