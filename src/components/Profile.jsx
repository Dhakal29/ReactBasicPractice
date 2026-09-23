const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',
  imageSize: 55,
};

export default function Profile() {
  return (
    <div
      style={{
        position: 'fixed',
        top: '16px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        padding: '10px 14px',
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
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
        }}
      />
      <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-h)' }}>
        {user.name}
      </span>
    </div>
  );
}
