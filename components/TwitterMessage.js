const React = require('react');

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this)
    this.charsLeft = this.charsLeft.bind(this)
  }

  handleChange(ev) {
    this.setState({
      value: ev.target.value,
    });
  }

  charsLeft() {
    let max = this.props.maxChars
    let num = max - this.state.value.length
    return num
  }

  render() {
    return (
      <div>
        <p>{this.charsLeft()}</p>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

module.exports = TwitterMessage;
