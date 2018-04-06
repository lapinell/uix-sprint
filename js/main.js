"use strict";

let build = require ('./_buildDOM');
let htmlParts = require('./_htmlComponents');

build.buildDOM('nav', htmlParts.pageNav);
build.buildDOM('footer', htmlParts.pageFooter);
console.log('end main.js');