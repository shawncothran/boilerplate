### Universal JS Boilerplate

---

> **WARNING** This version of Universal JS Boilerplate uses Babel v6, which is **UNDER ACTIVE DEVELOPMENT**. The plugin system currently has a lot of issues, and the Babel v6 presets for ES2015/ES7 features are having a few difficulties as of Nov 6th, 2015. Noted among the currently non-working features are static and non-static class properties, decorators, and the destructuring of complex objects in function arguments.

This is a scaffolding project that includes boilerplate code for:

- Node
- Heroku configuration
- Babel, Babel runtime, ES6/2015, ES7/2016
- Express, with a default server, some example code and routes, static file sharing, and proxy code
- Node-sass, some example SCSS, grids, normalize and typeplate css kits (installed from bower)
- Example files/resources
- An example .gitignore for the project
- A host of npm scripts for watching and building your files
- Documentation and testing scaffolds

#### How to get started

1. Start your own project folder with a git clone, and if you plan to push this clone to GitHub, you'll need to change your origin:

    ```sh
    cd ~/Github\ Projects/
    git clone git@github.com:matthiasak/universal-js-boilerplate.git NEWPROJECT
    cd NEWPROJECT
    git remote remove origin
    git remote add origin YOUR_SSH_ADDRESS
    ```

2. Install prerequisites

    ```sh
    npm install
    ```

3. Start your server:

    ```sh
    npm start

    # Alternatively, if you need nodemon to auto-reload your server
    # (when doing server-side work)
    # npm run nodemon
    ```

4. Ready to push your code to heroku?

    ```sh
    git commit -am "Let's do this"
    heroku create <my app name>
    git push heroku HEAD:master
    ```

5. Or are you pushing to gh-pages instead?

    ```sh
    npm run publish:gh-pages
    ```

6. Or are you using [surge.sh](http://surge.sh)?

    ```sh
    npm run publish:surge
    # you may be prompted to login or signup,
    # and then you'll be asked what URL to push to on surge.sh
    ```

    > Note: you can teardown a surge.sh URL with `npm run teardown`, which will prompt you for the URL to bring down

7. Want to generate your own documentation with [esdocs](https://github.com/esdoc/esdoc)?

    ```sh
    # build docs and open locally
    npm run docs
    open dist/esdoc/index.html
    # or build AND publish to gh-pages or to surge
    npm run docs:gh-pages
    npm run docs:surge
    ```

#### Changelog

- Nov 6, 2015
    - upgrading various scripts, check dosc and package.json for details
    - adding a config.json for configuration, and equivalent checks on heroku-server.js
    - added proper hot module code that reruns the app in app-browserify.js
    - new example tests, and adding ava as build system instead of mocha
- Nov 1, 2015
    - new babel tooling, but reverted babe; back to 5.8.x because 6.x is not es7 friendly
    - new babelify, new browserify, new node engine (node v5!!! run `npm upgrade:brew`)
    - new documentation and gh-pages workflow
    - simplified installation time/process, especially with node v5 (auto `dedupe` feature in node v5, or in older version do `npm run dedupe`)
    - modified the server-side architecture to use the babel require-hook (`require('babel/register')`) only for app code, and to share a backing server incluide to save memory usage
- Oct 30, 2015
    - upgraded babel to @^6.0.12, including adopting the new ecosystem of tools, plugins, parsers, and transformers
    - added `npm-run-all` to build system, which cleans up any asynchronous scripts and logging running on parallel and sequential background and foreground scripts
- Oct 28, 2015
    - reverting to postcss, because node-sass takes forever to install when it works, and fails to install on weak connections (npm downloads a huge binary)
    - in lieue of node-sass, the only thing that doesn't work exactly like Sass is interpolation
- Oct 27, 2015
    - added `surge.sh` push/deployment scripts, and split up the express server code, so that heroku-server now uses the `nanny` module to scale out and monitor the health of a load-balanced cluster
    - added [`hmr-browserify`](https://github.com/substack/browserify-handbook#browserify-hmr) support, which allows live code changes of only a single file (not the entire app-browserify) to be pushed to the browser as the developers makes edits
    - added `exorcist` to the js build process; which pulls the source maps out of `app-browserify.js` into its own file, `app-browserify.js.map` (browsers already know to look for this file if source maps are enabled and the source map is not embedded in the main file); this can make certain debugging and build steps faster
- Oct 25, 2015
    - npm scripts now include an `npm run gh-pages`, that uses git subtrees to push only your `dist` folder to the `gh-pages` branch (in otherwords, your visible app will now be located at `http://username.github.io/projectname`, not `http://username.github.io/projectname/dist`)
- Oct 21, 2015
    - Build system and package.json changes: Tools are now installed per project, due to difficulties in global tool/version management. Tools are also now included as a dependency (installed with `npm install`), so that build tools can run both local server or on platforms like Heroku. When you push to platforms like Heroku, the package.json will automatically build the source files and flush them into the dist folder. This eliminates the need to manage the built js and css files in Git, so they are now in `.gitignore`.
    - `npm run watch` no longer uglifies by default, and automatically builds source maps with `-d` option for browserify
    - `mocha` is configured to run with babel, so tests and files can be run with ES7/6
    - `esdoc` is automatically installed and provided with a config file to help with generating documentation for DocBlocks. Install `docblockr` (Sublime Text) or similar plugins to make this easy.
    - PostCSS removed in favor of node-sass, because despite the speed benefits, no one releases anything in PostCSS, nor does PostCSS have perfect support for advanced Sass language syntax like mixins and interpolation.
    - React has been upgraded to v0.14

#### License

MIT.
