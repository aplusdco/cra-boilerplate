// from https://stackoverflow.com/a/49439893
// used to preserve SFDC button styling

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props

  const modifiedOnClick = event => {
    if (onClick) {
      onClick(event)
    }
    history.push(to)
  }

  return (
    <button {...rest} onClick={modifiedOnClick} />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export const RouterLinkButton = withRouter(LinkButton)
