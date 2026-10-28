import { useState } from 'react'
import Profile from './components/Profile.jsx'
import ShoppingList from './components/ShoppingList.jsx'
import CounterCard from './components/CounterCard.jsx'
import AddCounterForm from './components/AddCounterForm.jsx'
import './App.css'
import Card from './components/Card.jsx'
const person = {
  name: 'Leslie Alexander',
  email: 'leslie.alexander@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const initialCounters = [
  { id: 1, label: 'Mangoes', step: 1, target: 3, clicks: 0 },
  { id: 2, label: 'Bananas', step: 5, target: 20, clicks: 0 },
];
function App() {
  const [counters, setCounters] = useState(initialCounters);
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
  console.log('Filtered Counters:', filteredCounters);
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
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 16px' }}>
      {/* 🚀 Tailwind CSS Example Card */}
      <div className="my-6 p-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-2xl shadow-xl text-white text-center transform transition duration-300 hover:scale-105">
        <h2 className="text-2xl font-extrabold tracking-wide mb-2">
          Tailwind CSS is Working! 🎉
        </h2>
        <p className="text-blue-100 text-sm mb-4">
          Utility classes in action: gradient background, rounded corners, drop shadows, and hover animations!
        </p>
        <button 
          type="button" 
          className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
        >
          Tailwind Button ✨
        </button>
      </div>

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
    <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-300 my-4 text-center">
      Welcome to React Basic Practice
    </h1>
    <Card person={person}/>

    </main>
  )
}
  
export default App;
