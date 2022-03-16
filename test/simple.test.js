const { normalizeForSearch } = require('../lib/index')

test('to lowercase', () => {
  expect(normalizeForSearch('Yannick')).toBe('yannick')
})

test('empty string', () => {
  expect(normalizeForSearch('')).toBe('')
  expect(normalizeForSearch(' ')).toBe('')
})

test('trim', () => {
  const result = 'yannick'
  expect(normalizeForSearch(' Yannick')).toBe(result)
  expect(normalizeForSearch('Yannick ')).toBe(result)
})

test('umlaut', () => {
  const result = 'zmorgele'
  expect(normalizeForSearch('Zmörgele')).toBe(result)
  expect(normalizeForSearch('Zmorgele')).toBe(result)
  expect(normalizeForSearch('Zmoergele')).toBe(result)
})

test('accents', () => {
  const result = 'jerome'
  expect(normalizeForSearch('Jérôme')).toBe(result)
  expect(normalizeForSearch('jeroeme')).toBe(result)
  expect(normalizeForSearch('Jèröme')).toBe(result)
  expect(normalizeForSearch('Jerome')).toBe(result)
})
