export function max(numbers: number[]): number | null {
  return numbers.length === 0 ? null 
    : numbers.reduce((a, b) => (a > b ? a : b));
}