// ========= Redux Wrapper
// import all packages
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import PropTypes from 'prop-types'
import { store, persistor } from '../redux/store'

export function ReduxWrapper (props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  )
}

ReduxWrapper.propTypes = {
  children: PropTypes.node.isRequired
}
