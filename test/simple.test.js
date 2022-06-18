import { normalizeForSearch } from '../lib/index.js'

test('some char test', () => {
  expect(normalizeForSearch('æ æ̃ ä á ae ç e é ß')).toBe('a a a a a c e e ss')
})

test('with numbers', () => {
  expect(normalizeForSearch('user_123')).toBe('user_123')
})

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

test('second name', () => {
  const result = 'celine diaz'
  expect(normalizeForSearch('Céline Díaz')).toBe(result)
})

test('second name (too many space)', () => {
  const result = 'celine diaz'
  expect(normalizeForSearch('Céline   Díaz')).toBe(result)
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
