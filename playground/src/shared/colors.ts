const RESET = "\x1B[0m";
const DIM = "\x1B[2m";
const BOLD = "\x1B[1m";
const CYAN = "\x1B[36m";
const GREEN = "\x1B[32m";
const YELLOW = "\x1B[33m";
const MAGENTA = "\x1B[35m";
const BLUE = "\x1B[34m";
const RED = "\x1B[31m";

export function makeColor(enabled: boolean) {
  if (!enabled) {
    return {
      dim: (s: string) => s,
      bold: (s: string) => s,
      cyan: (s: string) => s,
      green: (s: string) => s,
      yellow: (s: string) => s,
      magenta: (s: string) => s,
      blue: (s: string) => s,
      red: (s: string) => s,
    };
  }
  return {
    dim: (s: string) => `${DIM}${s}${RESET}`,
    bold: (s: string) => `${BOLD}${s}${RESET}`,
    cyan: (s: string) => `${CYAN}${s}${RESET}`,
    green: (s: string) => `${GREEN}${s}${RESET}`,
    yellow: (s: string) => `${YELLOW}${s}${RESET}`,
    magenta: (s: string) => `${MAGENTA}${s}${RESET}`,
    blue: (s: string) => `${BLUE}${s}${RESET}`,
    red: (s: string) => `${RED}${s}${RESET}`,
  };
}

export type Colors = ReturnType<typeof makeColor>;
