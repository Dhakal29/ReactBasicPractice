import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Profile from './Profile.jsx'
import './App.css'
import ShoppingList from './ShoppingList.jsx'
import CounterCard from './CounterCard.jsx'
import AddCounterForm from './AddCounterForm.jsx'
 const initialCounters = [
    { id: 1, label: 'Mangoes', step: 1, target: 3, clicks: 0 },
    { id: 2, label: 'Bananas', step: 5, target: 20, clicks: 0 },
    { id: 3, label: 'Oranges', step: 2, target: 10, clicks: 0 },
    { id: 4, label: 'Apples', step: 3, target: 15, clicks: 0 },
  ];
function App() {
  const [counters, setCounters] = useState(initialCounters);
  const [count, setCount] = useState(0);
  const [showAll, setShowAll] = useState(true);
  const [search, setSearch] = useState('');
  // const [newLabel, setNewLabel] = useState('');

  const filteredCounters = counters.filter(counter => {
    const matchesTarget = showAll || counter.target >= 10;

    const matchesSearch = counter.label
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesTarget && matchesSearch;
  });
  

  function handleAddCounter(label) {
    const newCounter = {
      id: crypto.randomUUID(),
      label,
      step: 1,
      target: 10,
      clicks: 0,
    };

    setCounters(previousCounters => [
      ...previousCounters,
      newCounter,
    ]);
  }

  


  function handleDeleteCounter(id) {
    console.log('Delete clicked. Counter ID:', id);
    console.log('Counters before deletion:', counters);

    setCounters(previousCounters =>
      previousCounters.filter(counter => counter.id !== id)
    );
  }
   function handleIncreaseTarget(id) {
    setCounters(previousCounters =>
      previousCounters.map(counter =>
        counter.id === id
          ? { ...counter, target: counter.target + 5 }
          : counter
      )
    );
  }  

  function handleIncrement(id) {
    setCounters(previousCounters =>
      previousCounters.map(counter =>
        counter.id === id && counter.clicks < counter.target
          ? { ...counter, clicks: counter.clicks + counter.step }
          : counter
      )
    );
  }

  function handleResetCounter(id) {
    setCounters(previousCounters =>
      previousCounters.map(counter =>
        counter.id === id
          ? { ...counter, clicks: 0 }
          : counter
      )
    );
  }
   function handleResetAll() {
       setCounters(previousCounters =>
         previousCounters.map(counter => ({
           ...counter,
           clicks: 0,
         }))
       );
     }
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
    <AddCounterForm onAdd={handleAddCounter} />
    <label>
    Search counters:
    <input
      type="text"
      value={search}
      onChange={event => setSearch(event.target.value)}
      placeholder="Try typing Bananas"
    />
    </label>
    <p>You are searching for: {search}</p>


     <button
    className="counter"
    onClick={() => setShowAll(previousShowAll => !previousShowAll)}
  >
    {showAll ? "Show targets of 10 or more" : "Show all counters"}
  </button>
    {filteredCounters.length === 0 && (
      <p>No counters match your search and filter.</p>
    )}
    <button type="button" onClick={handleResetAll}>
      Reset all counters
    </button>
    {filteredCounters.map(counter => (
    <CounterCard
      key={counter.id}
      label={counter.label}
      clicks={counter.clicks}
      onIncrement={() => handleIncrement(counter.id)}
      onReset={() => handleResetCounter(counter.id)}
      target={counter.target}
      onDelete={() => handleDeleteCounter(counter.id)}
      onIncreaseTarget={() => handleIncreaseTarget(counter.id)}
    />
  
  ))}

    </>
  )
}
  
export default App;
