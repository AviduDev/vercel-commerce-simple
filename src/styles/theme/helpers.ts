import { THEME_SIZES } from "../../constants/styles/index";

const Round = (num: number, round?: number) => Number(num.toFixed(round || 1));
const RemoveExtension = (size: string) =>
  Number(size.replaceAll("rem", "").replaceAll("px", ""));

export const GenerateSizesTree = (
  sizesList: string[],
  core: number,
  multiplier: number,
  defaultSize: string
) => {
  const sizesTree: any = {};
  const sizesUnderDefault: number = sizesList.slice(
    0,
    sizesList.indexOf(defaultSize)
  ).length;

  const minSizeValue = () => {
    let idx = sizesUnderDefault;
    let result = core;
    do {
      result = result / multiplier;
      idx--;
    } while (idx > 0);

    return Number(result.toFixed(2));
  };

  function PX() {
    for (let _idx = 0; _idx < sizesList.length; _idx++) {
      sizesTree[sizesList[_idx]] =
        _idx === 0
          ? minSizeValue() + THEME_SIZES.PX
          : Round(
              RemoveExtension(sizesTree[sizesList[_idx - 1]]) * multiplier
            ) + THEME_SIZES.PX;
    }

    return sizesTree;
  }

  function REM() {
    for (let _idx = 0; _idx < sizesList.length; _idx++) {
      sizesTree[sizesList[_idx]] =
        _idx === 0
          ? Round(minSizeValue() / core, 3) + THEME_SIZES.REM
          : Round(
              RemoveExtension(sizesTree[sizesList[_idx - 1]]) * multiplier,
              4
            ) + THEME_SIZES.REM;
    }

    return sizesTree;
  }

  return {
    PX,
    REM,
  };
};
