import React from 'react'
import PropTypes from 'prop-types'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'
import ReactOnRails from 'react-on-rails'
import HomeApp from './HomeApp'

const consoleErrorReporter = ({ error }) => {
  console.error(error) // eslint-disable-line
  return null
}
consoleErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
}

const HomeHotLoader = (props, railsContext, domNodeId) => {
  const element = (
    <AppContainer errorReporter={ consoleErrorReporter }>
      <HomeApp { ...props } { ...railsContext } />
    </AppContainer>
  )
  render(element, document.getElementById(domNodeId))
}

ReactOnRails.register({
  Home    : HomeHotLoader,
})
