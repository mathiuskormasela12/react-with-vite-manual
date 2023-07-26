// ========= Main
// import all packages
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import all components
import { ReduxWrapper } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxWrapper>
      <App />
    </ReduxWrapper>
  </React.StrictMode>
)
