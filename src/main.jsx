import React, { StrictMode,useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorPart from './components/ColorPart.jsx'
import Button from './components/Button.jsx'
// 1. Component function example:
function MyApp() {
  return (
    <div>
      <h1>My React App</h1>
      <p>This is a simple React application.</p>
    </div>
  );
}

// 2. Custom JS Object (Used in our custom react renderer):
// NOTE: This cannot be rendered directly by React because it lacks React's internal $$typeof symbol and expected shape.
const anotherElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "click here to visit google.com"
}

// 3. Direct JSX element (Vite transpiles this into React.createElement behind the scenes):
const anotherContainer = (
  <a href="https://google.com" target="_blank">Visit the site</a>
)

// 4. Official React Element created manually using React.createElement:
// Parameters: (tag, props/attributes, children/text)
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'click here to visit google.com'
)

// 5. Interactive Background Color Changer Component:
function ColorChangerApp() {
  const [color, setColor] = useState('red');

  return (
    <>
      {/* Dynamic full-screen background */}
      <ColorPart color={color} />

      {/* Buttons bar on top of the background */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '24px',
          display: 'flex',
          gap: '12px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Button text="Red" bgColor="#dc2626" onClick={() => setColor('#dc2626')} />
        <Button text="Blue" bgColor="#2563eb" onClick={() => setColor('#2563eb')} />
        <Button text="Green" bgColor="#16a34a" onClick={() => setColor('#16a34a')} />
        <Button text="Yellow" bgColor="#ca8a04" onClick={() => setColor('#ca8a04')} />
        <Button text="Purple" bgColor="#9333ea" onClick={() => setColor('#9333ea')} />
        <Button text="Black" bgColor="#18181b" onClick={() => setColor('#18181b')} />
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Active: Background Color Changer */}
    <ColorChangerApp />

    {/* Other components you can uncomment to test: */}
    {/* <MyApp /> */}
    {/* <App /> */}
    {/* {anotherContainer} */}
    {/* {reactElement} */}
  </StrictMode>,
)
