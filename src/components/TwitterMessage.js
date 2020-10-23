//My Answer!

// import React from "react";

// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       characters: "",
//       total: 0
//     };
//   }

//   handleChange = (event) => {
//     const {name, value} = event.target
//     this.setState({
//      characters : value
//     })
//     this.updateNumber()
//   }

//   updateNumber = () => {
//     // console.log(this.props.maxChars)
//     // console.log(this.state.characters.length)
//     const updatedTotal = this.props.maxChars - this.state.characters.length
//     this.setState({
//       total : updatedTotal
//      })
//   }

//   render() {
//     // console.log(this.props.maxChars)
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input type="text" name="message" id="message" value={this.state.total} onChange={event => this.handleChange(event)}/>
//         <h1>{this.state.characters}</h1>
//         <h1>{this.state.total}</h1>
//       </div>
      
//     );
//   }
// }

// export default TwitterMessage;
// LEARN.Co answer
import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;