'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@heroui/react";
import Palette from './components/Palette';
import FavoriteColors from './components/FavoriteColors';
import SavedPalettes from './components/SavedPalettes';

export default function ColorPickerPage() {
  const [savedPalettes, setSavedPalettes] = useState<string[][]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    }
    return [];
  });

  // Keep localStorage in sync if palettes are changed elsewhere
  useEffect(() => {
    localStorage.setItem('savedPalettes', JSON.stringify(savedPalettes));
  }, [savedPalettes]);

  function handlePaletteSaved(newPalettes: string[][]) {
    setSavedPalettes([...newPalettes]);
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="py-6 px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">Color Palette Generator</h1>
          <p className="text-xl text-default-500 mt-2">Generate, lock, favorite, and save beautiful color palettes</p>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto px-4">
        <Palette onPaletteSaved={handlePaletteSaved} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <FavoriteColors />
          <SavedPalettes palettes={savedPalettes} setPalettes={setSavedPalettes} />
        </div>
      </div>
      
      <div className="bg-animation fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="gradient-circle-1 absolute rounded-full filter blur-3xl opacity-20 animate-float w-[600px] h-[600px] bg-primary/30 -top-[200px] -left-[200px]"></div>
        <div className="gradient-circle-2 absolute rounded-full filter blur-3xl opacity-20 animate-float w-[800px] h-[800px] bg-secondary/30 -bottom-[300px] -right-[200px] animation-delay-5"></div>
        <div className="gradient-circle-3 absolute rounded-full filter blur-3xl opacity-20 animate-float w-[500px] h-[500px] bg-gray-500/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animation-delay-10"></div>
      </div>
      
      <div className="fixed bottom-4 right-4">
        <Button 
          color="primary" 
          variant="flat"
          href="/dashboard"
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
} 