import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      maxChars: props.maxChars,
      remainingChars: props.maxChars
    };
  }

  updateCharLength = () => {
    this.setState(previousState => {
      return{
        remainingChars: previousState.maxChars - previousState.message.length
      }
    })
  }

  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
    this.updateCharLength()
  }

  render() {
    return (
      <div>
        <div>Remaining Characters: <strong>{this.state.remainingChars}</strong></div>
        <strong>Your message:</strong>
        <input onChange={event => this.changeMessage(event)} type="text" name="message" id="message" value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
