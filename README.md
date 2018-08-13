<div align="center">
  <br />
  <p>
    <a href="https://discord.gg/XPTsrgq"><img src="https://image.ibb.co/gFf8mU/crlogo.png" width="546" alt="cyberrequire" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/XPTsrgq"><img src="https://discordapp.com/api/guilds/478558806020718613/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/cyberrequire"><img src="https://img.shields.io/npm/v/cyberrequire.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/cyberrequire"><img src="https://img.shields.io/npm/dt/cyberrequire.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://www.codacy.com/project/kendinikertenkelebek/cyberrequire/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kendinikertenkelebek/cyberrequire&amp;utm_campaign=Badge_Grade_Dashboard"><img src="https://api.codacy.com/project/badge/Grade/58c302f9bf2e4bc0be8915a4579423fa"/></a>
    <a href="https://github.com/kendinikertenkelebek/cyberrequire/issues"><img src="https://img.shields.io/github/issues/kendinikertenkelebek/cyberrequire.svg" alt="cyberrequire issues"></a>
    <a href="https://david-dm.org/kendinikertenkelebek/cyberrequire"><img src="https://david-dm.org/kendinikertenkelebek/cyberrequire/status.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/cyberrequire/"><img src="https://nodei.co/npm/cyberrequire.png?downloads=true&downloadRank=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

# About

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

cyberrequire was developing for CyberEngine. And now, she is **open source**! cyberrequire, requires modules without error!

### Installation

_cyberrequire_ requires [Node.js](https://nodejs.org/dist/latest) latest version to run.

```sh
$ npm i cyberrequire -S
```

or

```sh
$ yarn add cyberrequire
```

### Usage

```js
// how to make an require
const cr = require('cyberrequire')
const module = cr('MODULE_NAME')
console.log(module)
// returns module or null

// how to make alternative require
const module = cr('sqlite', 'mongoose')
console.log(module)

// returns the installed module
```

### Technology

_cyberrequire_ uses a number of open source projects to work properly:

- [Node.JS] - _cyberrequire_ uses this powerful programming language.
- [VScode] - We're highly recommending this awesome code editor.

And of course _cyberrequire_ itself is open source with a [public repository][repository] on _GitHub_.

### Plugins

_cyberrequire_ is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin      | README                                    |
| ----------- | ----------------------------------------- |
| @types/node | [plugins/definitelytyped/README.md][pldt] |
| Eslint      | [plugins/eslint/README.md][plge]          |
| Nodemon     | [plugins/nodemon/README.md][plgn]         |

### Semantic Versioning

We're using [SemVer][semver] for this project.

### Development

Want to contribute? Great!

_cyberrequire_ uses eslint for stable developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

```sh
$ git clone <url>
$ cd <cloned_folder_name>
$ npm i -d
$ npm test
```

### Our Contributors

- Yankı Küçük - [Twitter][yk]

And you can see also all contributors [here][contributors].

[twitter]: https://developer.twitter.com/en/docs/basics/twitter-ids.html
[node.js]: http://nodejs.org
[vscode]: https://code.visualstudio.com/insiders/
[repository]: https://github.com/kendinikertenkelebek/cyberrequire
[pldt]: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.md
[plge]: https://github.com/eslint/eslint/blob/master/README.md
[plgn]: https://github.com/remy/nodemon/blob/master/README.md
[semver]: https://semver.org
[yk]: https://twitter.com/seviyorumstop
[contributors]: https://github.com/kendinikertenkelebek/cyberrequire/graphs/contributors

## License

Aphace 2.0
