import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 72,
};

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleLogout() {
    alert('Logged out successfully!');
    setIsOpen(false);
  }

  function handleAbout() {
    alert(`${user.name} is a pioneer in frequency-hopping spread spectrum technology.`);
    setIsOpen(false);
  }

  return (
    <div style={{ position: 'fixed', top: '20px', right: '24px', zIndex: 1000 }}>
      {/* Clickable profile trigger with CSS hover effect */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className={`profile-btn ${isOpen ? 'active' : ''}`}
      >
        <img
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}
        />
        <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-h)' }}>
          {user.name} {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 10px)',
            right: 0,
            width: '195px',
            background: 'rgba(28, 28, 35, 0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <button
            type="button"
            onClick={handleAbout}
            className="profile-dropdown-item"
          >
            👤 About
          </button>

          <button
            type="button"
            onClick={() => {
              alert('Opening Settings...');
              setIsOpen(false);
            }}
            className="profile-dropdown-item"
          >
            ⚙️ Settings
          </button>

          <hr style={{ margin: 0, borderColor: 'var(--border)' }} />

          <button
            type="button"
            onClick={handleLogout}
            className="profile-dropdown-item"
            style={{ color: '#f87171' }}
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}
