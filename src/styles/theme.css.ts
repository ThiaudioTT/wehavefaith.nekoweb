import type { Theme } from "./theme";
import { KillEmAllTheme } from "./theme";

export function themeToCSS(theme: Theme) {
  return `
    :root {
      --text: ${theme.text};
      --background: ${theme.background};
      --primary: ${theme.primary};
      --secondary: ${theme.secondary};
      --accent: ${theme.accent};
    }
  `;
}

// default output
export const themeCSS = themeToCSS(KillEmAllTheme);
