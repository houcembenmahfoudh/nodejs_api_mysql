# find-repos

<p align="center">
  Node module to recursively find git repos in any folder
</p>

## Install

```bash
npm install --save find-repos
```

## Usage

The best feature of `find-repos` against [other alternatives](https://www.npmjs.com/package/find-git-repos) is that `find-repos` works with Promises, so you can use `await` or `then` to call the API:

```javascript
const repos = require('find-repos')
repos({ baseDir: '~', maxDepth: '2', ignores: ['node_modules'] })
.then(console.log)
/* =>
[ '/Users/pablopunk/repos/bashy',
  '/Users/pablopunk/repos/dotfiles',
  '/Users/pablopunk/repos/find-repos',
  '/Users/pablopunk/repos/healthi-app',
  '/Users/pablopunk/repos/hyper',
  '/Users/pablopunk/www/gmaps', ]
*/
```

## Options

```javascript
{
  basePath : 'defaults to ~, sets the root folder for the search',
  maxDepth : 'defaults to 3, sets how deep the search gets',
  ignores : 'defaults to ["node_modules"], array of paths to ignore'
}
```

## Related

The cli for this module is [coming soon](https://github.com/pablopunk)

## Author

| ![me](https://www.gravatar.com/avatar/fa50aeff0ddd6e63273a068b04353d9d?s=100) |
| ----------------------------------------------------------------------------- |
| © 2017 [Pablo Varela](https://twitter.com/pablopunk)                          |