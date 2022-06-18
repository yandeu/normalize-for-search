import { normalizeForSearch } from '../lib/index.js'

describe('german characters', () => {
  test('umlaut', () => {
    expect(normalizeForSearch('ä/ö/ü')).toBe('a/o/u')
    expect(normalizeForSearch('ae/oe/ue')).toBe('a/o/u')
  })
  test('eszett', () => {
    expect(normalizeForSearch('ß')).toBe('ss')
    expect(normalizeForSearch('ss')).toBe('ss')
  })
})
