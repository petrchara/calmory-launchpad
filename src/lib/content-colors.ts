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
  "usinani": {
    background: hexToHsl("#A68A79"),
    text: "0 0% 100%", // White text
  },
  "pribeh": {
    background: hexToHsl("#FFB74D"),
    text: "0 0% 0%", // Black text for better readability
  },
  "pribehy-ze-zivota": {
    background: hexToHsl("#FFB74D"),
    text: "0 0% 0%", // Black text for better readability
  },
  // Default gray style for other badges
  "detske-pohadky": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
  "hudba": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
  "zvuky-prirody": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
  "afirmace": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
  "tip": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
  "vyzvy-ukoly": {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill
  },
};

// Category colors mapping (for therapy alphabet and other categories)
const categoryColors: Record<string, ContentColor> = {
  "regulace emocí": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#2F2F2F"), // Dark text for light background
  },
  "terapeutické techniky": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#2F2F2F"), // Dark text
  },
  "mindfulness": {
    background: hexToHsl("#673AB7"),
    text: "0 0% 100%", // White text
  },
  // Default for unknown categories
  "default": {
    background: hexToHsl("#BDBDBD"),
    text: hexToHsl("#2F2F2F"),
  },
};

export const getFormatColor = (format: string): ContentColor => {
  const normalizedFormat = format.toLowerCase().replace(/\s+/g, "-");
  return formatColors[normalizedFormat] || {
    background: "transparent",
    text: "0 0% 50%", // Gray text, no fill as default
  };
};

export const getCategoryColor = (category: string): ContentColor => {
  const normalizedCategory = category.toLowerCase();
  return categoryColors[normalizedCategory] || categoryColors["default"];
};

export const getContentColor = (text: string, type: "format" | "category" = "format"): ContentColor => {
  return type === "format" ? getFormatColor(text) : getCategoryColor(text);
};