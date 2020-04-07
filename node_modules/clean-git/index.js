const repos = require('find-repos')
const isGitClean = require('is-git-clean')

const isRepoDirty = r => !isGitClean.sync(r)

module.exports = async args => (await repos(args)).filter(isRepoDirty)
