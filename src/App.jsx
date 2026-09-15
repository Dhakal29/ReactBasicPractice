import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Profile from './Profile.jsx'
import './App.css'
import ShoppingList from './ShoppingList.jsx'

const counters = [
    { id: 1, label: 'Mangoes', step: 1, target: 3 },
    { id: 2, label: 'Bananas', step: 5, target: 20 },
    { id: 3, label: 'Oranges', step: 2, target: 10 },
    { id: 4, label: 'Apples', step: 3, target: 15 },
  ];
function App() {
    const [count, setCount] = useState(0);

    const filteredCounters = counters.filter(counter => counter.target >= 10);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button type="button" className="counter" onClick={() => setCount((count) => count - 1)}>
          
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    <Profile />
    <ShoppingList />
    {/* <MyButton/> */}
    {filteredCounters.map(counter => (
    <MyButton
      key={counter.id}
      label={counter.label}
      step={counter.step}
      target={counter.target}
    />
  ))}

    </>
  )
}
  function MyButton({ label, step, target }) {
    const [clicks, setClicks] = useState(0);

    function handleClick() {
      setClicks(previousClicks => previousClicks + step);
    }

    function handleReset() {
      setClicks(0);
    }

    return (
      <div>
        <button
          className="counter practice-button"
          onClick={handleClick}
          disabled={clicks >= target}
        >
          {label}: {clicks}
        </button>

        <button
          className="counter practice-button"
          onClick={handleReset}
          disabled={clicks === 0}
        >
          Reset
        </button>

        <p>
          {clicks < target ? "Keep going!" : "Target reached!"}
        </p>
      </div>
    );
  }

export { MyButton };
export default App;
