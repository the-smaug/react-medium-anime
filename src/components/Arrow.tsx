import * as React from 'react'

import styles from '../utils/styles'

class Arrow extends React.Component {
  render () {
    const { clickHandler, direction, style } = this.props

    return (
      <div
        style={{
          fontSize: '5em',
          display: 'flex',
          borderRadius: '50%',
          position: 'absolute',
          top: '30%',
          zIndex: styles.zIndexMedium,
          height: '100px',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          width: '100px',
          ...style
        }}
        onClick={clickHandler}
      >
        <span>{direction === 'left' ? '<' : '>'}</span>
      </div>
    )
  }
}

export default Arrow