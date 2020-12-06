import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    // this.handleMaxChar = this.handleMaxChar.bind(this)
    //console.log(this.props.maxChars)
    this.state = {
      char: " "
    };
  }
 

  handleMaxChar = event => {
    console.log(event.target.value)
    this.setState({
      char: event.target.value
    })
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  // let formData = { char: this.state.char}
  // //this.sendFormDataSomewhere(formData)
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleMaxChar(event)} value={this.state.char} />
        <p>You have got {this.props.maxChars - this.state.char.length} characters remaining. </p>
        
      </div>
    );
  }
}

export default TwitterMessage;
