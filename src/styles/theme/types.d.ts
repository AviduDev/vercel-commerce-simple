interface ThemeColors {
  main: string;
  second: string;
  third: string;
  black: string;
  white: string;
}

interface ThemeSizes {
  core: number;
  multiplier: number;
  xxs: number;
  xs: number;
  sm: number;
  smx: number;
  md: number;
  mdx: number;
  lg: number;
  lgx: number;
  default: number;
}

interface StyledTheme {
  colors: ThemeColors;
  sizes: ThemeSizes;
}
