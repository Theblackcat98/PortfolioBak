import React from 'react';

export default function ColorSlot({ color, locked, onLock, onFavorite }) {
  return (
    <div className="color-slot" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 0.5rem' }}>
      <div
        style={{
          background: color,
          width: 80,
          height: 80,
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
          marginBottom: 8,
          border: locked ? '3px solid var(--bittersweet)' : '3px solid transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        title={color}
      >
        <button
          onClick={onFavorite}
          style={{
            position: 'absolute',
            top: 6,
            right: 6,
            background: 'rgba(255,255,255,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: 24,
            height: 24,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: 'var(--jasper)',
          }}
          title="Favorite"
        >
          ★
        </button>
        <button
          onClick={onLock}
          style={{
            position: 'absolute',
            bottom: 6,
            right: 6,
            background: locked ? 'var(--bittersweet)' : 'rgba(255,255,255,0.6)',
            border: 'none',
            borderRadius: '50%',
            width: 24,
            height: 24,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: locked ? 'white' : 'var(--bittersweet)',
          }}
          title={locked ? "Unlock" : "Lock"}
        >
          {locked ? '🔒' : '🔓'}
        </button>
      </div>
      <div style={{ color: 'var(--cool-gray)', fontSize: 14, marginTop: 2 }}>{color}</div>
    </div>
  );
}
