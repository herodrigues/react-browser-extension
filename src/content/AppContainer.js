import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import React from 'react'
import App from './App'
import ErrorBoundary from './ErrorBoundary'

import * as appActions from './store/actions'

const AppContainer = ({ state, actions }) => (
  <ErrorBoundary>
    <App {...state} />
  </ErrorBoundary>
)

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
