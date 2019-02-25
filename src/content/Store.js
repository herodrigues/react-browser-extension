import React from 'react'
import browser from 'webextension-polyfill'

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

export const Store = React.createContext()

export function StoreProvider (props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const value = { state, dispatch }

  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'TOGGLE_APP') {
      dispatch(request)
    }
  })

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )
}
