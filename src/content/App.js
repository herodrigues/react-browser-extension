import React from 'react'
import logo from './logo.svg'

import { StoreContext } from './Store'

export default () => {
  const { state, dispatch } = React.useContext(StoreContext) // eslint-disable-line

  if (!state.visible) {
    return null
  }

  return (
    <div className='App App-fade'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to React</h1>
      </header>
      <p className='App-intro'>
        To get started, edit <code>src/App.js</code> and reload the extension.
      </p>
    </div>
  )
}
