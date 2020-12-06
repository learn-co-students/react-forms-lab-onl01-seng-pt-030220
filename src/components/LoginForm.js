import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handledLogin = event => {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (username !== "" && password !== "") {
      this.props.handleLogin({username, password})
      this.setState({
        username: '',
        password: ''
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handledLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
