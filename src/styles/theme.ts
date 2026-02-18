export const KillEmAllTheme = {
  // Metallica - Kill 'Em All inspired theme
  text: "#FFFFFF", // white typography from the logo
  background: "#050307", // almost-black backdrop
  primary: "#E10600", // blood-red / logo red
  secondary: "#F5F5F5", // light panel / album background
  accent: "#FF4B4B", // brighter red for highlights
} as const;

export type Theme = typeof KillEmAllTheme;
