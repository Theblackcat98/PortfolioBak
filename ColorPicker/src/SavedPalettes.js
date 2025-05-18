import React, { useState, useEffect } from 'react';

export default function SavedPalettes({ palettes, setPalettes }) {
  function loadPalette(palette) {
    localStorage.setItem('palette', JSON.stringify(palette));
    window.location.reload();
  }

  function removePalette(idx) {
    const newPalettes = palettes.slice();
    newPalettes.splice(idx, 1);
    setPalettes(newPalettes);
    localStorage.setItem('savedPalettes', JSON.stringify(newPalettes));
  }

  if (!palettes || palettes.length === 0) return null;

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--jasper)', marginBottom: '1rem' }}>Saved Palettes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {palettes.map((palette, idx) => (
          <div key={idx} className="app-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1rem', borderRadius: 16 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              {palette.map((color, i) => (
                <div key={color + i} className="saved-palette-color" style={{ background: color, width: 40, height: 40, borderRadius: 8, border: '2px solid var(--cool-gray)' }}></div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button onClick={() => loadPalette(palette)} style={{ fontSize: 13, background: 'var(--bittersweet)', color: 'white', border: 'none', borderRadius: 8, padding: '4px 14px', cursor: 'pointer' }}>Load</button>
              <button onClick={() => removePalette(idx)} style={{ fontSize: 13, background: 'var(--glass-bg)', color: 'var(--jasper)', border: 'none', borderRadius: 8, padding: '4px 14px', cursor: 'pointer' }}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
