import React from 'react'
import browser from 'webextension-polyfill'

// import { connectToDevTools } from 'react-devtools-core'
// connectToDevTools()

const initialState = {
  visible: false
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_APP':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const StoreContext = React.createContext()
export const StoreConsumer = StoreContext.StoreConsumer

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  browser.runtime.onMessage.addListener((action, sender, sendResponse) => {
    if (action.type === 'TOGGLE_APP') {
      dispatch(action)
    }
  })

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default { StoreContext, StoreConsumer, StoreProvider }
