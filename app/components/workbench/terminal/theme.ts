import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--puppy-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--puppy-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--puppy-elements-terminal-textColor'),
    background: cssVar('--puppy-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--puppy-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--puppy-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--puppy-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--puppy-elements-terminal-color-black'),
    red: cssVar('--puppy-elements-terminal-color-red'),
    green: cssVar('--puppy-elements-terminal-color-green'),
    yellow: cssVar('--puppy-elements-terminal-color-yellow'),
    blue: cssVar('--puppy-elements-terminal-color-blue'),
    magenta: cssVar('--puppy-elements-terminal-color-magenta'),
    cyan: cssVar('--puppy-elements-terminal-color-cyan'),
    white: cssVar('--puppy-elements-terminal-color-white'),
    brightBlack: cssVar('--puppy-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--puppy-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--puppy-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--puppy-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--puppy-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--puppy-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--puppy-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--puppy-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
