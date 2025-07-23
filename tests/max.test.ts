import { describe, it, expect } from 'vitest'
import { max } from '../src/max'

describe('max', () => {
  it("returns null for an empty list", () => {
    expect(max([])).toBeNull()
  })
})