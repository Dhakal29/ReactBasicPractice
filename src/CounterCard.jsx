export default function CounterCard({ label, clicks, target,onIncrement,onReset,onDelete, onIncreaseTarget }) {
    return (
      <div>
        <button
          type="button"
          className="counter practice-button"
          onClick={onIncrement}
          disabled={clicks >= target}
        >
          {label}: {clicks}
        </button>

        <button
          type="button"
          className="counter practice-button"
          onClick={onReset}
          disabled={clicks === 0}
        >
          Reset
        </button>

        <p>{clicks < target ? 'Keep going!' : 'Target reached!'}</p>
        <p>Target: {target}</p>

  <button type="button" onClick={onIncreaseTarget}>
    Increase target by 5
  </button>

  <button type="button" onClick={onDelete}>
    Delete
  </button>
      </div>
    );
  }
