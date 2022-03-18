const { normalizeForSearch } = require('../lib/index')

describe('french characters', () => {
  test('la cédille', () => {
    expect(normalizeForSearch('ç')).toBe('c')
  })
  test("l'accent aigu", () => {
    expect(normalizeForSearch('é')).toBe('e')
  })
  test("l'accent circonflexe", () => {
    expect(normalizeForSearch('â/ê/î/ô/û')).toBe('a/e/i/o/u')
  })
  test("l'accent grave", () => {
    expect(normalizeForSearch('à/è/ì/ò/ù')).toBe('a/e/i/o/u')
  })
  test("l'accent tréma", () => {
    expect(normalizeForSearch('ë/ï/ü')).toBe('e/i/u')
  })
  test('o-e entrelacé', () => {
    expect(normalizeForSearch('œ', 'o'))
    expect(normalizeForSearch('oe', 'o'))
  })
})
