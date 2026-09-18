import { useState } from 'react';

  export default function AddCounterForm({ onAdd }) {
    const [label, setLabel] = useState('');

    function handleSubmit(event) {
      event.preventDefault();

      const trimmedLabel = label.trim();

      if (trimmedLabel === '') {
        return;
      }

      onAdd(trimmedLabel);
      setLabel('');
    }

    return (
      <form onSubmit={handleSubmit}>
        <label>
          New counter name:
          <input
            type="text"
            value={label}
            onChange={event => setLabel(event.target.value)}
            required
          />
        </label>

        <button type="submit">Add counter</button>
      </form>
    );
  }