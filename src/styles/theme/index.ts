import CONFIG from "../config.json";
import { GenerateSizesTree } from "./helpers";

const { list, core, multiplier, defaultSize } = CONFIG.sizes;

const theme: StyledTheme = {
  colors: CONFIG.colors,
  sizes: GenerateSizesTree(list, core, multiplier, defaultSize).REM(),
  limits: {
    pageWidth: "70vw",
  },
};

export default theme;
