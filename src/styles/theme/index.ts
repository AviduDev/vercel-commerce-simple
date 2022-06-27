const CONFIG = require("../config.json");
const { GenerateSizesTree } = require("./helpers");

const { list, core, multiplier, defaultSize } = CONFIG.sizes;

const theme: StyledTheme = {
  colors: CONFIG.colors,
  sizes: GenerateSizesTree(list, core, multiplier, defaultSize),
};

export default theme;

console.log(GenerateSizesTree(list, core, multiplier, defaultSize));
