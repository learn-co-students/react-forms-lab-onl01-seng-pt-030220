import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit= {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username: 
            <input 
            onChange={event => this.handleChange(event)} 
            value={this.state.username}
            id="username" name="username" type="text" />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Password: 
            <input 
            onChange={event => this.handleChange(event)} 
            value={this.state.password} 
            id="password" name="password" type="password" />
          </label>
        </div>
        <br></br>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
