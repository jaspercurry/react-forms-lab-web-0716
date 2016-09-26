const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();


    this.poemChange = this.poemChange.bind(this)
    this.showError = this.showError.bind(this)
    this.state = {poem: ""};
  }

  poemChange(event) {
    this.setState({
      poem: event.target.value
    })
  }

  showError() {
    let poem = this.state.poem
    let lines = poem.trim().split(/\n/)
    let lineWords = lines.reduce(function(init, line, index){
      let wordcount = line.trim().split(" ").length
      init[index] = wordcount
      return init
    }, {})
    debugger
    if (lines.length != 3 || lineWords[0] != 5 || lineWords[1] != 3 || lineWords[2] != 5 ) {
      return <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.poemChange}/>
          <div> {this.showError()} </div>
      </div>
    );
  }
}

module.exports = PoemWriter;
