import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submittedData: []
    };
  }

handleChangeUsername=(event)=>{
  const name=event.target.name
  const value=event.target.value
   this.setState({

     //username:  event.target.value,
     [name]: value
     
   })

}
handleChangePassword=(event)=>{
   this.setState({
     
     password:  event.target.value
   })

}
handleSubmit=(event)=>{
  event.preventDefault()
  const { username, password} =this.state
  let formData={username: this.state.username,password: this.state.password}
  let dataArray =this.state.submittedData.concat(formData)
  this.setState({

    submittedData: dataArray
  })
 if(username && password){
   this.props.handleLogin({username,password})
 }

}

listOfSubmissions =()=>{
  return this.state.submittedData.map(data=>{

    return <div><span>{data.username}</span><span>{data.password}</span></div>
  })
}
  render() {
    return (
      <div>
      <form  onSubmit={event=>this.handleSubmit(event)}>

        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  
            onChange={event =>this.handleChangeUsername(event)}
             value={this.state.username}/>
          </label>
        </div>

        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            onChange={event =>this.handleChangePassword(event)}
            value={this.state.password}
             />
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
        {this.listOfSubmissions()}
      </div>
     
    )
  }
}

export default LoginForm;
