import React from 'react'

function ColorPart({ color = 'olive' }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
      }}
    ></div>
  )
}
export default ColorPart