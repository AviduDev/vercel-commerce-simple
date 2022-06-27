const Round = (num: number) => Number(num.toFixed(1));

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

  for (let _idx = 0; _idx < sizesList.length; _idx++) {
    sizesTree[sizesList[_idx]] =
      _idx === 0 ? minSizeValue() : Round(sizesTree[sizesList[_idx - 1]] * multiplier);
  }

  return sizesTree;
};
