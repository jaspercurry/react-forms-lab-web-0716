const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {unval: "",
                  pwval: ""};
    this.formSub = this.formSub.bind(this)
    this.userChange = this.userChange.bind(this)
    this.pwChange = this.pwChange.bind(this)
  }

  formSub(event) {
    event.preventDefault()
    debugger
    if (this.state.unval && this.state.pwval) {
      this.props.onSubmit()
    }

  }


  userChange(event) {
    this.setState({unval: event.target.value})
  }

  pwChange(event) {
    this.setState({pwval: event.target.value})
  }


  render() {
    return (
      <form onSubmit={this.formSub}>
        <div>
          <label>
            Username
            <input id="test-username" ref="username" type="text" value={this.state.unval} onChange={this.userChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" ref="password" type="password" value={this.state.pwval} onChange={this.pwChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
