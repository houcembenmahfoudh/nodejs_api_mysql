
const test = require('ava')
const repos = require('./index')

test('Runs with default parameters', async t => {
  t.plan(1)
  await repos()
  .then(() => t.pass())
})

test('Runs in this directory', async t => {
  t.plan(1)
  const expected = [ '.' ]
  const result = await repos({baseDir: '.', maxDepth: '1'})
  t.deepEqual(expected, result)
})

test('Runs with custom ignores', async t => {
  t.plan(1)
  const expected = []
  const result = await repos({baseDir: '.', maxDepth: '1', ignores: ['./.git']})
  t.deepEqual(expected, result)
})
