const { normalizeForSearch } = require('../lib/index')
const { Database } = require('../lib/database')

const db = new Database()
db.set('Céline', 'Deniel')
db.set('Yannick', 'Müller')
db.set('Jérôme', 'Vincent')
db.set('Jules', 'César')

test('search Céline', () => {
  const celine = 'Céline'
  let res = []

  res = db.search('Celine')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe(celine)

  res = db.search('cel')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe(celine)

  res = db.search(' céli')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe(celine)

  res = db.search('Céline ')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe(celine)
})

test('search ce', () => {
  res = db.search('ce')
  expect(res.length).toBe(2)
  expect(res[0].firstName).toBe('Céline')
  expect(res[1].firstName).toBe('Jules')
})

test('search ü', () => {
  res = db.search('m')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')

  res = db.search('M')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')

  res = db.search('muller')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')

  res = db.search('  mueller')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')

  res = db.search('MUeLLer')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')

  res = db.search('müll')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Yannick')
})

test('search Jérôme', () => {
  res = db.search('Jerome Vincent')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Jérôme')
  expect(res[0].lastName).toBe('Vincent')

  res = db.search('jér')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Jérôme')
  expect(res[0].lastName).toBe('Vincent')

  res = db.search('vin')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Jérôme')
  expect(res[0].lastName).toBe('Vincent')

  res = db.search(' Vin')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Jérôme')
  expect(res[0].lastName).toBe('Vincent')

  res = db.search('vincent jérome')
  expect(res.length).toBe(1)
  expect(res[0].firstName).toBe('Jérôme')
  expect(res[0].lastName).toBe('Vincent')
})