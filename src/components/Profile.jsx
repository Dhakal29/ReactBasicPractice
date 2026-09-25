import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 72,
};

const menuItemStyle = {
  padding: '12px 16px',
  background: 'transparent',
  border: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontSize: '15px',
  color: 'var(--text-h, #fff)',
  width: '100%',
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
      {/* Clickable profile trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px',
          padding: '12px 24px',
          minWidth: '130px',
          background: isOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '20px',
          border: '1px solid var(--border)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          color: 'inherit',
          transition: 'all 0.2s ease',
        }}
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
            style={menuItemStyle}
          >
            👤 About
          </button>

          <button
            type="button"
            onClick={() => {
              alert('Opening Settings...');
              setIsOpen(false);
            }}
            style={menuItemStyle}
          >
            ⚙️ Settings
          </button>

          <hr style={{ margin: 0, borderColor: 'var(--border)' }} />

          <button
            type="button"
            onClick={handleLogout}
            style={{ ...menuItemStyle, color: '#f87171' }}
          >
            🚪 Logout
          </button>
        </div>
      )}
    </div>
  );
}
