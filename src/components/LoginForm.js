import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
      const {name, value} = event.target
      this.setState({
          username: value
      })
  }

  handlePasswordChange = (event) => {
    const {name, value} = event.target
    this.setState({
        password: value
    })
}

handleSubmit = (e) => {
  e.preventDefault()
  if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  console.log(e, "you are here ")
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
              <input
                id="username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
          <input
                id="password"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handlePasswordChange}
              />
          </label>
        </div>
        <h1>{this.state.username}</h1>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
