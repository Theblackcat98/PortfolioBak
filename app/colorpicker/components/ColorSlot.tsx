'use client';

import React from 'react';
import { Button } from "@heroui/react";

interface ColorSlotProps {
  color: string;
  locked: boolean;
  onLock: () => void;
  onFavorite: () => void;
}

export default function ColorSlot({ color, locked, onLock, onFavorite }: ColorSlotProps) {
  // Determine if the text should be white or black based on the background color
  const getBrightness = (hex: string) => {
    // Remove the # if present
    hex = hex.replace('#', '');
    
    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    // Calculate brightness (YIQ formula)
    return (r * 0.299 + g * 0.587 + b * 0.114) > 160;
  };

  const isDark = !getBrightness(color);
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className="flex flex-col items-center">
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-2 relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute -top-1 -right-1 flex gap-1">
          <Button
            isIconOnly
            size="sm"
            className="w-6 h-6 min-w-0 text-xs bg-white/80 backdrop-blur-sm"
            onClick={onLock}
            title={locked ? "Unlock" : "Lock"}
          >
            {locked ? "🔒" : "🔓"}
          </Button>
          <Button
            isIconOnly
            size="sm"
            className="w-6 h-6 min-w-0 text-xs bg-white/80 backdrop-blur-sm"
            onClick={onFavorite}
            title="Favorite"
          >
            ⭐
          </Button>
        </div>
      </div>
      <div className={`text-xs font-mono ${textColor}`}>
        {color.toUpperCase()}
      </div>
    </div>
  );
} 