export function max(numbers: number[]): number | null {
  if (numbers.length === 0) return null;

  let currentMax = numbers[0];
  for (const num of numbers) {
    if (num > currentMax) {
      currentMax = num;
    }
  }

  return currentMax;
}