import React from "react"
import { AppContainer } from "react-hot-loader"
import { render } from "react-dom"
import ReactOnRails from "react-on-rails"
import Home from "../components/Home"

const consoleErrorReporter = ({ error }) => {
  console.error(error) // eslint-disable-line
  return null
}
consoleErrorReporter.propTypes = {
  error: React.PropTypes.instanceOf(Error).isRequired
}

const HomeHotLoader = (props, railsContext, domNodeId) => {
  const renderApp = (Component) => {
    const element = (
      <AppContainer errorReporter={consoleErrorReporter}>
        <Component />
      </AppContainer>
    )
    render(element, document.getElementById(domNodeId))
  }
  renderApp(Home)
}

ReactOnRails.register({ Home: HomeHotLoader })
