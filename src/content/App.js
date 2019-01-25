import React from 'react'
import logo from './logo.svg'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 3
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(({ counter }) => ({
      counter: counter - 1
    }))
  }

  render () {
    if (this.state.counter === 0) {
      throw new Error('I crashed!')
    }

    return (
      <div className='App App-fade' style={{ display: this.props.visible ? 'block' : 'none' }}>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and reload the extension.
        </p>
        <p className='App-footer' onClick={this.handleClick}>
          Click here {this.state.counter} times to throw an error.
        </p>
      </div>
    )
  }
}

export default App
