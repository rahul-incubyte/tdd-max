export function max(numbers: number[]): number | null {
  if (numbers.length === 0) return null;
  
  let maxValue = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
  return maxValue;
}