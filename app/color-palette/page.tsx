'use client';

import { useState } from 'react';

type ColorHarmony = 'complementary' | 'analogous' | 'triadic' | 'tetradic';

function hexToHSL(hex: string): [number, number, number] {
  // Remove the hash if present
  hex = hex.replace(/^#/, '');

  // Parse the hex values
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

function HSLToHex(h: number, s: number, l: number): string {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  const toHex = (n: number) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function generateHarmony(baseColor: string, harmony: ColorHarmony): string[] {
  const [h, s, l] = hexToHSL(baseColor);
  const colors = [baseColor];

  switch (harmony) {
    case 'complementary':
      colors.push(HSLToHex((h + 180) % 360, s, l));
      break;
    case 'analogous':
      colors.push(
        HSLToHex((h + 30) % 360, s, l),
        HSLToHex((h + 60) % 360, s, l),
        HSLToHex((h - 30 + 360) % 360, s, l),
        HSLToHex((h - 60 + 360) % 360, s, l)
      );
      break;
    case 'triadic':
      colors.push(
        HSLToHex((h + 120) % 360, s, l),
        HSLToHex((h + 240) % 360, s, l)
      );
      break;
    case 'tetradic':
      colors.push(
        HSLToHex((h + 90) % 360, s, l),
        HSLToHex((h + 180) % 360, s, l),
        HSLToHex((h + 270) % 360, s, l)
      );
      break;
  }

  return colors;
}

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#000000');
  const [harmony, setHarmony] = useState<ColorHarmony>('complementary');
  const [palette, setPalette] = useState<string[]>([]);

  const handleGeneratePalette = () => {
    const newPalette = generateHarmony(baseColor, harmony);
    setPalette(newPalette);
  };

  const handleExport = () => {
    const paletteText = palette.join('\n');
    const blob = new Blob([paletteText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `color-palette-${harmony}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-16 animate-[fadeIn_1s_ease-in,slideUp_1s_ease-out] opacity-0 [animation-fill-mode:forwards]">
        Tintella
        <span className="block text-2xl md:text-3xl mt-2 text-gray-600 dark:text-gray-400">Create Beautiful Color Harmonies</span>
      </h1>
      
      <main className="max-w-3xl mx-auto space-y-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-lg border border-black/10 dark:border-white/10">
          <div className="space-y-8">
            {/* Color Picker */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                Choose Base Color
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="w-16 h-16 rounded-xl cursor-pointer"
                />
                <input
                  type="text"
                  value={baseColor.toUpperCase()}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="flex-1 p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
                  placeholder="#000000"
                />
              </div>
            </div>

            {/* Harmony Selection */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                Choose Harmony Rule
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {(['complementary', 'analogous', 'triadic', 'tetradic'] as ColorHarmony[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setHarmony(type)}
                    className={`p-4 rounded-xl font-medium capitalize transition-colors duration-200 ${harmony === type ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGeneratePalette}
              className="w-full py-4 px-6 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              Generate Palette
            </button>

            {/* Color Palette Display */}
            {palette.length > 0 && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 h-32">
                  {palette.map((color, index) => (
                    <div
                      key={index}
                      className="rounded-xl shadow-inner flex flex-col overflow-hidden"
                    >
                      <div
                        className="flex-1"
                        style={{ backgroundColor: color }}
                      />
                      <div className="p-2 text-center text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                        {color.toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleExport}
                  className="w-full py-3 px-6 rounded-xl bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                >
                  Export Palette
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}