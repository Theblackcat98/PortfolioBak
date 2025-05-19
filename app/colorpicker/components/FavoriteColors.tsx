'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody } from "@heroui/react";

export default function FavoriteColors() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    // Subscribe to storage events for cross-tab sync
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'favorites') {
        setFavorites(JSON.parse(e.newValue || '[]'));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  function handleRemove(color: string) {
    const newFavorites = favorites.filter(c => c !== color);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  }

  return (
    <Card className="bg-default-50">
      <CardHeader className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Favorite Colors</h2>
        <p className="text-default-500">Your saved colors</p>
      </CardHeader>
      <CardBody>
        {favorites.length === 0 ? (
          <p className="text-center text-default-400">No favorite colors yet. Click the ⭐ in a color to add it here.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {favorites.map((color, idx) => (
              <div key={idx} className="relative group">
                <div 
                  className="w-12 h-12 rounded-md cursor-pointer"
                  style={{ backgroundColor: color }}
                  onClick={() => navigator.clipboard.writeText(color)}
                  title="Click to copy color code"
                >
                  <div 
                    className="absolute top-0 right-0 bg-black bg-opacity-60 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(color);
                    }}
                    title="Remove from favorites"
                  >
                    ×
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
} 