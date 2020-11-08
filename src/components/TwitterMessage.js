import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessage = event => {
  this.setState({
    message: event.target.value
  })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value ={this.state.message} onChange={event => this.handleMessage(event)}/>
        <p> Remaining count {this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
