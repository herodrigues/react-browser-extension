import React from 'react'

import crash from './crash.png'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    this.setState({ hasError: true })
    console.log(error, info)
  }

  render () {
    if (this.state.hasError) {
      return (
        <div className='App'>
          <header className='App-header'>
            <img src={crash} className='App-crash' alt='crash' />
            <h1 className='App-title'>Something went wrong.</h1>
          </header>
          <p className='App-intro'>
            App has crashed!
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
