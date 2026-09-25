import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 72,
};

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setIsOpen(false);
    setShowLogoutModal(true);
  }

  function handleConfirmLogout() {
    setShowLogoutModal(false);
    alert('Logged out successfully!');
  }

  function handleCancelLogout() {
    setShowLogoutModal(false);
  }

  return (
    <>
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
              onClick={() => {
                alert(`${user.name} is a pioneer in frequency-hopping spread spectrum technology.`);
                setIsOpen(false);
              }}
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
              onClick={handleOpenLogoutModal}
              className="profile-dropdown-item"
              style={{ color: '#f87171' }}
            >
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showLogoutModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}
          onClick={handleCancelLogout}
        >
          <div
            style={{
              background: 'rgba(28, 28, 35, 0.98)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '24px',
              width: '90%',
              maxWidth: '340px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
              textAlign: 'center',
            }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🚪</div>
            <h3 style={{ margin: '0 0 8px', color: 'var(--text-h)', fontSize: '18px' }}>
              Confirm Logout
            </h3>
            <p style={{ margin: '0 0 20px', color: 'var(--text)', fontSize: '14px', lineHeight: 1.4 }}>
              Are you sure you want to log out?
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                type="button"
                onClick={handleCancelLogout}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: '1px solid var(--border)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: 'var(--text-h)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  transition: 'background 0.2s',
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmLogout}
                style={{
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: 'none',
                  background: '#ef4444',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
                  transition: 'background 0.2s',
                }}
              >
                Yes, Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
