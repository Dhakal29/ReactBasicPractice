import React from 'react'

function ColorPart({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100px',
        height: '100px',
        display: 'inline-block',
        margin: '5px',
      }}
    ></div>
  )
}
export default ColorPart