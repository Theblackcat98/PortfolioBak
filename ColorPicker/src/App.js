import React, { useState, useEffect } from 'react';
import Palette from './Palette';
import FavoriteColors from './FavoriteColors';
import SavedPalettes from './SavedPalettes';

function App() {
  const [savedPalettes, setSavedPalettes] = useState(() => {
    return JSON.parse(localStorage.getItem('savedPalettes') || '[]');
  });

  // Keep localStorage in sync if palettes are changed elsewhere
  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
  }, [savedPalettes]);

  function handlePaletteSaved(newPalettes) {
    setSavedPalettes([...newPalettes]);
  }

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1>Color Palette Generator</h1>
            <div className="subtitle">Generate, lock, favorite, and save beautiful color palettes</div>
          </div>
        </div>
      </header>
      <div className="dashboard">
        <Palette onPaletteSaved={handlePaletteSaved} />
        <FavoriteColors />
        <SavedPalettes palettes={savedPalettes} setPalettes={setSavedPalettes} />
      </div>
      <div className="bg-animation">
        <div className="gradient-circle-1"></div>
        <div className="gradient-circle-2"></div>
        <div className="gradient-circle-3"></div>
      </div>
    </div>
  );
}

export default App;
