This folder using https://www.npmjs.com/package/patch-package

To patch packages that need to be fix, but the author is not fix yet or they already abandoned it

Also to build a fork consume more time, and so doing PRs too.

These patches will auto patch after yarn add, remove, install.

Please don't delete this folder unless you know what're you doing.

### To patch a package

First make changes to the files of a particular package in your `node_modules` folder, then run

`yarn patch-package package-name`
