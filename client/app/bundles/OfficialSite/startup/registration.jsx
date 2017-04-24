import ReactOnRails from 'react-on-rails'

import Home from '../components/Home'
import Admin from '../components/Admin'

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Home,
  Admin,
})
