import React from 'react'
import { render } from 'react-dom'

import Wrapper from './Wrapper'
import App from './App'

import AppCSS from './App.css'

// import { connectToDevTools } from 'react-devtools-core'
// connectToDevTools()

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    let container = document.getElementById('webext-root')

    if (!container) {
      container = document.createElement('div')
      container.id = 'webext-root'
      const zIndex = process.env.NODE_ENV === 'development' ? 9999999 : 2147483648
      container.style = `position:fixed;right:0;top:0;float:right;z-index:${zIndex};`
      document.body.appendChild(container)

      const style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode(AppCSS))

      render(
        <Wrapper rootElement={container} style={style}>
          <App />
        </Wrapper>,
        container
      )
    }
  }
}
