const trapRainWater = (heights: number[]): number => {
  if (heights.length < 3) return 0;

  let n = heights.length;
  let maxLeft: number[] = new Array(n);
  let maxRight: number[] = new Array(n);

  maxLeft[0] = heights[0]!;
  for (let i = 1; i < n; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1]!, heights[i]!);
  }

  maxRight[n - 1] = heights[n - 1]!;
  for (let i = n - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1]!, heights[i]!);
  }

  let totalWater = 0;
  for (let i = 0; i < n; i++) {
    const waterLevel = Math.min(maxLeft[i]!, maxRight[i]!);
    const waterAtThisBar = waterLevel - heights[i]!;
    totalWater += Math.max(0, waterAtThisBar);
  }

  return totalWater;
};
console.log(trapRainWater([3, 0, 1, 0, 4, 0, 2]));
