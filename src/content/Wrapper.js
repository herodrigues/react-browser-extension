import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default function Wrapper (props) {
  const nodeRef = React.createRef()
  let shadowRoot = null
  let iframeHead = null
  let iframeBody = null

  if (props.rootElement.attachShadow) {
    shadowRoot = props.rootElement.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(props.style)
  } else {
    iframeHead = nodeRef.contentDocument.head
    iframeBody = nodeRef.contentDocument.body
  }

  if (shadowRoot) {
    return ReactDOM.createPortal(props.children, shadowRoot)
  }

  return (
    <iframe sandbox={this.props.sandbox} ref={nodeRef}>
      {iframeHead && ReactDOM.createPortal(props.style, iframeHead)}
      {iframeBody && ReactDOM.createPortal(props.children, iframeBody)}
    </iframe>
  )
}

Wrapper.propTypes = {
  rootElement: PropTypes.instanceOf(window.Element),
  style: PropTypes.instanceOf(window.Element)
}

Wrapper.defaultProps = {
  sandbox: 'allow-same-origin allow-scripts allow-forms allow-popups'
}
