import { createStore } from 'redux'
import rootReducer from './reducers'

if (process.env.NODE_ENV !== 'production') {
  require('react-devtools')
}

export default createStore(rootReducer)
