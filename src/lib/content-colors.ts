// Content format and category color mapping
// Colors from the provided design scheme

interface ContentColor {
  background: string;
  text: string;
}

// Convert hex to HSL for Tailwind CSS variables
const hexToHsl = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

// Format colors mapping
const formatColors: Record<string, ContentColor> = {
  "dychani": {
    background: hexToHsl("#3F51B5"),
    text: "0 0% 100%", // White text for dark backgrounds
  },
  "meditace": {
    background: hexToHsl("#673AB7"),
    text: "0 0% 100%", // White text
  },
  "detske-meditace": {
    background: hexToHsl("#F4EDFF"),
    text: hexToHsl("#673AB7"), // Dark text for light background
  },
  "usinani": { // Maps to "Příběhy na spaní"
    background: hexToHsl("#A68A79"),
    text: "0 0% 100%", // White text
  },
  "detske-pohadky": {
    background: hexToHsl("#E0F7FA"),
    text: hexToHsl("#7A9E7E"), // Dark text for light background
  },
  "hudba": {
    background: hexToHsl("#7A9E7E"),
    text: "0 0% 100%", // White text
  },
  "zvuky-prirody": {
    background: hexToHsl("#A8D5BA"),
    text: hexToHsl("#7A9E7E"), // Dark text
  },
  "afirmace": {
    background: hexToHsl("#F5F5DC"),
    text: hexToHsl("#7A9E7E"), // Dark text for light background
  },
  "pribehy-ze-zivota": {
    background: hexToHsl("#FFB74D"),
    text: hexToHsl("#7A9E7E"), // Dark text
  },
  "vyzvy-ukoly": {
    background: hexToHsl("#FF5722"),
    text: "0 0% 100%", // White text
  },
};

// Category colors mapping (for therapy alphabet and other categories)
const categoryColors: Record<string, ContentColor> = {
  "regulace emocí": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#7A9E7E"), // Dark text for light background
  },
  "terapeutické techniky": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#7A9E7E"), // Dark text
  },
  "mindfulness": {
    background: hexToHsl("#673AB7"),
    text: "0 0% 100%", // White text
  },
  // Default for unknown categories
  "default": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#7A9E7E"),
  },
};

export const getFormatColor = (format: string): ContentColor => {
  const normalizedFormat = format.toLowerCase().replace(/\s+/g, "-");
  return formatColors[normalizedFormat] || categoryColors["default"];
};

export const getCategoryColor = (category: string): ContentColor => {
  const normalizedCategory = category.toLowerCase();
  return categoryColors[normalizedCategory] || categoryColors["default"];
};

export const getContentColor = (text: string, type: "format" | "category" = "format"): ContentColor => {
  return type === "format" ? getFormatColor(text) : getCategoryColor(text);
};