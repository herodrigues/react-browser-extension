import React from 'react'
import 'react-devtools'
import { render } from 'react-dom'

import ErrorBoundary from './ErrorBoundary'
import App from './App'
import Wrapper from './Wrapper'

import AppCSS from './App.css'

// import { StoreProvider } from './Store'

window.addEventListener('DOMContentLoaded', function () {
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
      <ErrorBoundary>
        <Wrapper rootElement={container} style={style}>
          <App />
        </Wrapper>
      </ErrorBoundary>,
      container
    )
  }
})
