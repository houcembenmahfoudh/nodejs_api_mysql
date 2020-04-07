# clean-git

<p align="center">
  <a href="https://travis-ci.org/pablopunk/clean-git"><img src="https://img.shields.io/travis/pablopunk/clean-git.svg" /> </a>
  <a href="https://codecov.io/gh/pablopunk/clean-git"><img src="https://img.shields.io/codecov/c/github/pablopunk/clean-git.svg" /> </a>
  <a href="https://standardjs.com"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /> </a>
  <a href="https://github.com/pablopunk/miny"><img src="https://img.shields.io/badge/made_with-miny-1eced8.svg" /> </a>
  <a href="https://www.npmjs.com/package/clean-git"><img src="http://img.shields.io/npm/dt/clean-git.svg" /></a>
</p>

<p align="center">
  <i>Find all git repos that are not 'clean'</i>
</p>


## Install

```sh
npm install clean-git
```


## Usage

```js
const cleanGit = require('clean-git')
cleanGit({ baseDir: '~', maxDepth: '2', ignores: ['node_modules'] })
.then(console.log)
/* =>
[ '/Users/pablopunk/repos/bashy',
  '/Users/pablopunk/repos/hyper',
  '/Users/pablopunk/www/gmaps', ]
*/
```


## Contribute

Feel free to open an _issue_ or a _PR_.


## License

[__MIT license__](license)


## Related

CLI for this module => [clean-git-cli](https://github.com/pablopunk/clean-git-cli)


## Author

| ![me](https://gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?size=100)           |
| --------------------------------- |
| [Pablo Varela](http://pablo.life)   |

