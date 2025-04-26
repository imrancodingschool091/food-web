// Loader.jsx
import React from 'react';

const Loader = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: '#3b82f6',
        animation: 'pulse 1.2s ease-in-out infinite',
        position: 'relative',
      }}
    >
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'rgba(209, 152, 61, 0.4)',
          animation: 'ripple 1.2s ease-out infinite',
        }}
      ></div>
    </div>

    <p style={{ marginTop: '20px', fontSize: '16px', color: '#555' }}>
      Loading menu...
    </p>

    <style>
      {`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}
    </style>
  </div>
);

export default Loader;
