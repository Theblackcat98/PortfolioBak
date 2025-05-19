'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/react";
import ColorSlot from './ColorSlot';
import ExportModal from './ExportModal';

function getRandomColor() {
  // Generates a random color in hex format
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generatePalette(locked: boolean[], currentColors: string[]) {
  // Generates a palette, respecting locked colors
  return currentColors.map((color, idx) =>
    locked[idx] ? color : getRandomColor()
  );
}

const DEFAULT_PALETTE_SIZE = 5;

interface PaletteProps {
  onPaletteSaved: (palettes: string[][]) => void;
}

export default function Palette({ onPaletteSaved }: PaletteProps) {
  const [colors, setColors] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('palette');
      return saved ? JSON.parse(saved) : Array(DEFAULT_PALETTE_SIZE).fill('').map(() => getRandomColor());
    }
    return Array(DEFAULT_PALETTE_SIZE).fill('').map(() => getRandomColor());
  });
  
  const [locked, setLocked] = useState<boolean[]>(Array(colors.length).fill(false));
  const [exportModalOpen, setExportModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('palette', JSON.stringify(colors));
  }, [colors]);

  function handleGenerate() {
    setColors(generatePalette(locked, colors));
  }

  function handleLock(idx: number) {
    setLocked(l => l.map((locked, i) => (i === idx ? !locked : locked)));
  }

  function handleAddColor() {
    setColors([...colors, getRandomColor()]);
    setLocked([...locked, false]);
  }

  function handleFavorite(idx: number) {
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

  function handleExportClick() {
    setExportModalOpen(true);
  }

  return (
    <div className="bg-default-50 rounded-lg p-6 border border-divider mb-8">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {colors.map((color, idx) => (
          <ColorSlot
            key={idx}
            color={color}
            locked={locked[idx]}
            onLock={() => handleLock(idx)}
            onFavorite={() => handleFavorite(idx)}
          />
        ))}
        <Button
          isIconOnly
          variant="light"
          radius="full"
          className="w-16 h-16 text-3xl"
          onClick={handleAddColor}
          title="Add color"
        >
          +
        </Button>
      </div>
      <div className="flex gap-4 mt-6 justify-center">
        <Button 
          color="primary"
          onClick={handleGenerate}
        >
          Generate
        </Button>
        <Button 
          color="secondary"
          onClick={handleSavePalette}
        >
          Save Palette
        </Button>
        <Button 
          color="success"
          onClick={handleExportClick}
        >
          Export
        </Button>
      </div>

      <ExportModal 
        isOpen={exportModalOpen} 
        onClose={() => setExportModalOpen(false)} 
        colors={colors}
      />
    </div>
  );
} 