const execa = require('execa')

const convertOutputToArray = output => output.split('\n')

const removeLastFolder = path => {
  let folders = path.split('/')
  folders.pop()
  return folders.join('/')
}

const keepDepthInRange = depth => {
  depth = depth > 10 ? 10 : depth
  depth = depth < 0 ? 1 : depth
  return depth
}

const buildIgnores = ignores => {
  let output = ignores.map(path => `-not -path *${path}*`)
  return output.join(' ')
}

const get = async ({baseDir = '~', maxDepth = '3', ignores = ['node_modules']} = {}) => {
  maxDepth = keepDepthInRange(maxDepth)
  ignores = buildIgnores(ignores)
  const cmd = `find ${baseDir} -name .git -type d ${ignores} -prune -maxdepth ${maxDepth}`
  let results = await execa.shell(cmd)
  results = results.stdout
  results = convertOutputToArray(results).map(removeLastFolder)
  if (results.length === 1 && results[0] === '') return []
  return results
}

module.exports = get
