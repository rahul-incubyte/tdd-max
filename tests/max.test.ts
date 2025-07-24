import { describe, it, expect } from 'vitest'
import { max } from '../src/max'

describe('max', () => {
  it("returns null for an empty list", () => {
    expect(max([])).toBeNull()
  })

  it("returns the number if the list has one element", () => {
    expect(max([42])).toBe(42);
  });

  it("returns the largest number from a list", () => {
    expect(max([10, 5, 42, 3])).toBe(42);
  });
})