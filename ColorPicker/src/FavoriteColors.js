import React, { useState, useEffect } from 'react';

export default function FavoriteColors() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(favs);
  }, []);

  function removeFavorite(color) {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]').filter(c => c !== color);
    localStorage.setItem('favorites', JSON.stringify(favs));
    setFavorites(favs);
  }

  if (favorites.length === 0) return null;

  return (
    <div className="app-card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ color: 'var(--bittersweet)', marginBottom: '1rem' }}>Favorite Colors</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {favorites.map((color, idx) => (
          <div key={color + idx} className="favorite-color" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ background: color, width: 60, height: 60, borderRadius: 10, marginBottom: 6, border: '2px solid var(--jasper)' }}></div>
            <div style={{ color: 'var(--cool-gray)', fontSize: 13 }}>{color}</div>
            <button onClick={() => removeFavorite(color)} style={{ marginTop: 4, fontSize: 12, background: 'var(--glass-bg)', color: 'var(--bittersweet)', border: 'none', borderRadius: 6, padding: '2px 8px', cursor: 'pointer' }}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
