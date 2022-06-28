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
  xxs: string;
  xs: string;
  sm: string;
  smx: string;
  md: string;
  mdx: string;
  lg: string;
  lgx: string;
  default: string;
}

interface ThemeLimits {
  pageWidth: string;
}

interface StyledTheme {
  colors: ThemeColors;
  sizes: ThemeSizes;
  limits: ThemeLimits;
}
