// es5 and 6 polyfills, powered by babel
require("babel-polyfill")

// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
require("isomorphic-fetch")

// universal utils: cache, fetch, store, resource, fetcher, router
// import {cache, fetch, store, resource, router} from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed file to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
        app()
    })
}

// import {React, Component, DOM, Resolver, resolve} from 'react-resolver'
import DOM from 'react-dom'
import React, {Component} from 'react'

// other stuff that we don't really use in our own code
var Pace = require("../bower_components/PACE/pace.js")

function app() {
    // start app
    // new Router()
    DOM.render(<p>test</p>, document.querySelector('.container'))
}

app()
