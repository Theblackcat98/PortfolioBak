'use client';

import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Tabs,
  Tab,
  Textarea,
  useDisclosure
} from "@heroui/react";

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  colors: string[];
}

// Helper functions for color conversion
const hexToRgb = (hex: string) => {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Convert 3-digit hex to 6-digit
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return [r, g, b];
};

const hexToHsl = (hex: string) => {
  // Convert hex to RGB first
  const [r, g, b] = hexToRgb(hex);
  
  // Then to HSL
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;
  
  const max = Math.max(r1, g1, b1);
  const min = Math.min(r1, g1, b1);
  let h = 0, s = 0, l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r1) h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
    else if (max === g1) h = (b1 - r1) / d + 2;
    else if (max === b1) h = (r1 - g1) / d + 4;
    h *= 60;
  }
  
  return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
};

export default function ExportModal({ isOpen, onClose, colors }: ExportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState("css-hex");
  const [formattedText, setFormattedText] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  // Generate formatted output based on selected format
  useEffect(() => {
    let output = "";
    
    switch(selectedFormat) {
      case "css-hex":
        output = generateCssHex(colors);
        break;
      case "css-hsl":
        output = generateCssHsl(colors);
        break;
      case "scss-hex":
        output = generateScssHex(colors);
        break;
      case "scss-hsl":
        output = generateScssHsl(colors);
        break;
      case "scss-rgb":
        output = generateScssRgb(colors);
        break;
      case "scss-gradient":
        output = generateScssGradient(colors);
        break;
      default:
        output = generateCssHex(colors);
    }
    
    setFormattedText(output);
  }, [selectedFormat, colors]);

  // Format generators
  const generateCssHex = (colors: string[]) => {
    return `:root {\n${colors.map((color, index) => `  --color-${index + 1}: ${color};`).join('\n')}\n}`;
  };

  const generateCssHsl = (colors: string[]) => {
    return `:root {\n${colors.map((color, index) => {
      const [h, s, l] = hexToHsl(color);
      return `  --color-${index + 1}: hsl(${h}, ${s}%, ${l}%);`;
    }).join('\n')}\n}`;
  };

  const generateScssHex = (colors: string[]) => {
    return colors.map((color, index) => `$color-${index + 1}: ${color};`).join('\n');
  };

  const generateScssHsl = (colors: string[]) => {
    return colors.map((color, index) => {
      const [h, s, l] = hexToHsl(color);
      return `$color-${index + 1}: hsl(${h}, ${s}%, ${l}%);`;
    }).join('\n');
  };

  const generateScssRgb = (colors: string[]) => {
    return colors.map((color, index) => {
      const [r, g, b] = hexToRgb(color);
      return `$color-${index + 1}: rgb(${r}, ${g}, ${b});`;
    }).join('\n');
  };

  const generateScssGradient = (colors: string[]) => {
    const gradientColors = colors.map(color => color).join(', ');
    return `$gradient: linear-gradient(to right, ${gradientColors});\n\n// Example usage:\n.gradient-element {\n  background: $gradient;\n}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedText);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="3xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          Export Color Palette
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2 mb-2">
              {colors.map((color, idx) => (
                <div 
                  key={idx} 
                  className="w-12 h-12 rounded" 
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            
            <Tabs variant="underlined" aria-label="Export format options">
              <Tab key="css-hex" title="CSS HEX" onClick={() => setSelectedFormat("css-hex")} />
              <Tab key="css-hsl" title="CSS HSL" onClick={() => setSelectedFormat("css-hsl")} />
              <Tab key="scss-hex" title="SCSS HEX" onClick={() => setSelectedFormat("scss-hex")} />
              <Tab key="scss-hsl" title="SCSS HSL" onClick={() => setSelectedFormat("scss-hsl")} />
              <Tab key="scss-rgb" title="SCSS RGB" onClick={() => setSelectedFormat("scss-rgb")} />
              <Tab key="scss-gradient" title="SCSS Gradient" onClick={() => setSelectedFormat("scss-gradient")} />
            </Tabs>
            
            <Textarea
              value={formattedText}
              readOnly
              minRows={8}
              className="font-mono text-sm"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleCopy}>
            {copySuccess ? "Copied!" : "Copy to Clipboard"}
          </Button>
          <Button color="danger" variant="light" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
} 