import React, { useState, useEffect } from 'react';
import ColorSlot from './ColorSlot';

function getRandomColor() {
  // Generates a random color in hex format
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette(locked, currentColors) {
  // Generates a palette, respecting locked colors
  return currentColors.map((color, idx) =>
    locked[idx] ? color : getRandomColor()
  );
}

const DEFAULT_PALETTE_SIZE = 5;

export default function Palette({ onPaletteSaved }) {
  const [colors, setColors] = useState(() => {
    const saved = localStorage.getItem('palette');
    return saved ? JSON.parse(saved) : Array(DEFAULT_PALETTE_SIZE).fill().map(getRandomColor);
  });
  const [locked, setLocked] = useState(Array(colors.length).fill(false));

  useEffect(() => {
    localStorage.setItem('palette', JSON.stringify(colors));
  }, [colors]);

  function handleGenerate() {
    setColors(generatePalette(locked, colors));
  }

  function handleLock(idx) {
    setLocked(l => l.map((locked, i) => (i === idx ? !locked : locked)));
  }

  function handleAddColor() {
    setColors([...colors, getRandomColor()]);
    setLocked([...locked, false]);
  }

  function handleFavorite(idx) {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favs.includes(colors[idx])) {
      favs.push(colors[idx]);
      localStorage.setItem('favorites', JSON.stringify(favs));
    }
  }

  function handleSavePalette() {
    const saved = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    saved.push(colors);
    localStorage.setItem('savedPalettes', JSON.stringify(saved));
    if (onPaletteSaved) onPaletteSaved(saved);
  }

  return (
    <div className="app-card" style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        {colors.map((color, idx) => (
          <ColorSlot
            key={idx}
            color={color}
            locked={locked[idx]}
            onLock={() => handleLock(idx)}
            onFavorite={() => handleFavorite(idx)}
          />
        ))}
        <button className="app-icon" onClick={handleAddColor} title="Add color" style={{ width: 60, height: 60, fontSize: 24, background: 'none', border: 'none', color: 'var(--sunset)', cursor: 'pointer' }}>+</button>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
        <button onClick={handleGenerate} className="app-icon" style={{ width: 120, height: 48, fontSize: 18, background: 'var(--bittersweet)', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Generate</button>
        <button onClick={handleSavePalette} className="app-icon" style={{ width: 120, height: 48, fontSize: 18, background: 'var(--jasper)', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Save Palette</button>
      </div>
    </div>
  );
}
