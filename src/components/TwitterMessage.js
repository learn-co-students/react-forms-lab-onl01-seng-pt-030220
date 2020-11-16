import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value //message
    })
  }

  render() {
    // console.log(this.props.maxChars)
    // console.log(this.state.message.length)
    return (
      <div>
        <p><strong>Your message:</strong></p>
        <input onChange={event => this.handleChange(event)} value={this.state.message} type="text" name="message" id="message" />
        <p>{(this.props.maxChars) - (this.state.message.length)} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
