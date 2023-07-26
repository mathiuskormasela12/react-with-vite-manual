// ========= App
// import all packages
import React, { Fragment } from 'react'

// import hooks
import { useApp } from './hooks'

function App () {
  const { like, handleLike, dislike, handleDislike } = useApp()

  return (
    <Fragment>
      <h1>Hello</h1>
      <button type="button" onClick={handleLike}>
        Like {like}
      </button>
      <button type="button" onClick={handleDislike}>
        Dislike {dislike}
      </button>
    </Fragment>
  )
}

export default App
