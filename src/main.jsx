import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorPart from './components/ColorPart.jsx'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ColorPart color="red" />
    {/* Option A: Render your MyApp component */}
    {/* <MyApp /> */}
    {/* <App /> */}
    {/* Option B: Render your full App project */}
    {/* <App /> */}

    {/* Option C: Render a JSX variable directly */}
    {/* {anotherContainer} */}

    {/* Option D: Render an official React.createElement */}
    {/* {reactElement} */}

    {/* ❌ Invalid Option: You cannot render `anotherElement` because React rejects plain objects: */}
    {/* {anotherElement} */}
  </StrictMode>,
)
