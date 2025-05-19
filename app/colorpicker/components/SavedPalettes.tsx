'use client';

import React from 'react';
import { Card, CardHeader, CardBody, Button } from "@heroui/react";

interface SavedPalettesProps {
  palettes: string[][];
  setPalettes: (palettes: string[][]) => void;
}

export default function SavedPalettes({ palettes, setPalettes }: SavedPalettesProps) {
  function handleRemove(index: number) {
    const newPalettes = [...palettes];
    newPalettes.splice(index, 1);
    setPalettes(newPalettes);
  }

  function handleCopyPalette(palette: string[]) {
    const colorCodes = palette.join(', ');
    navigator.clipboard.writeText(colorCodes);
  }

  return (
    <Card className="bg-default-50">
      <CardHeader className="flex flex-col gap-1">
        <h2 className="text-xl font-semibold">Saved Palettes</h2>
        <p className="text-default-500">Your color collections</p>
      </CardHeader>
      <CardBody>
        {palettes.length === 0 ? (
          <p className="text-center text-default-400">No palettes saved yet. Use the "Save Palette" button to add one.</p>
        ) : (
          <div className="space-y-4">
            {palettes.map((palette, idx) => (
              <div key={idx} className="border border-divider rounded-md p-2 relative group">
                <div className="flex mb-2">
                  {palette.map((color, colorIdx) => (
                    <div
                      key={colorIdx}
                      className="h-8 flex-grow"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button
                    size="sm"
                    variant="light"
                    onClick={() => handleCopyPalette(palette)}
                  >
                    Copy
                  </Button>
                  <Button
                    size="sm"
                    color="danger"
                    variant="light"
                    onClick={() => handleRemove(idx)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardBody>
    </Card>
  );
} 