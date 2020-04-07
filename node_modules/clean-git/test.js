const test = require('ava')
const c = require('.')

test('test this repo', async t => {
  await c({baseDir: '.'}).then(t.pass())
})

test('test deep', async t => {
  await c({baseDir: '.', maxDepth: 4}).then(t.pass())
})
